import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
    Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Constants from '../../constants/constants';
import Fetch_API_Data from '../../data/api';

const WatchlistScreen = () => {
    // set states for each watchlist
    const [watchedList, setWatchedList] = useState([]);
    const [watchingList, setWatchingList] = useState([]);
    const [intendList, setIntendList] = useState([]);

    // fetch data of a watchlist from AsyncStorage
    const getMovieDetails = async (watchlist, setMovieList) => {
        try {
            // get stored movie IDs from AsyncStorage
            const movie_IDs = JSON.parse(
                (await AsyncStorage.getItem(`@${watchlist}_movielist`)) || '[]',
            );
            console.log(movie_IDs);
            // fetch movie data from API using movie_id
            // API endpoint: https://api.themoviedb.org/3/movie/{movie_id}
            const response = movie_IDs.map((movie_id) =>
                Fetch_API_Data(`movie/${movie_id}`),
            );
            const movie_data = await Promise.all(response);
            setMovieList(movie_data);
        } catch (error) {
            console.log(error);
        }
    };

    // remove an item from a watchlist
    const removeMovieAsync = async (
        watchlist,
        movieID_toRemove,
        setMovieList,
    ) => {
        // get list of movie IDs from AsyncStorage
        let movieIDs =
            JSON.parse(await AsyncStorage.getItem(`@${watchlist}_movielist`)) ||
            [];

        // remove 'movieID_toRemove' from the list
        movieIDs = movieIDs.filter((movie_id) => movie_id !== movieID_toRemove);

        // update AsyncStorage with updated list
        await AsyncStorage.setItem(
            `@${watchlist}_movielist`,
            JSON.stringify(movieIDs),
        );

        setMovieList(movieIDs);
    };

    // fetch data for each watchlist from AsyncStorage
    useEffect(() => {
        getMovieDetails(Constants.WATCHLISTS[0], setWatchedList);
        getMovieDetails(Constants.WATCHLISTS[1], setWatchingList);
        getMovieDetails(Constants.WATCHLISTS[2], setIntendList);
    }, []);

    // render each item in the FlatList
    const renderFlatlistItem = (item) => (
        <View style={styles.itemContainer}>
            <Image
                style={styles.poster}
                source={{
                    uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.overview}</Text>
            {/* <Button
                title="Remove from List"
                onPress={() => {
                    console.log('"remove from list" pressed');
                    removeMovieAsync(watchlist, item.id, setMovieList);
                }}
            /> */}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.listTitle}>Watched</Text>
                <FlatList
                    data={watchedList}
                    renderItem={renderFlatlistItem}
                    keyExtractor={(item) => item.id.toString()}
                    watchlist={Constants.WATCHLISTS[0]}
                    setMovieList={setWatchedList}
                />

                <Text style={styles.listTitle}>Watching Now</Text>
                <FlatList
                    data={watchingList}
                    renderItem={renderFlatlistItem}
                    keyExtractor={(item) => item.id.toString()}
                    watchlist={Constants.WATCHLISTS[1]}
                    setMovieList={setWatchingList}
                />

                <Text style={styles.listTitle}>Intend to Watch</Text>
                <FlatList
                    data={intendList}
                    renderItem={renderFlatlistItem}
                    keyExtractor={(item) => item.id.toString()}
                    watchlist={Constants.WATCHLISTS[2]}
                    setMovieList={setIntendList}
                />

                {/* <Text style={styles.textStyle}>
                    This is the watchlist page.{'\n'}
                    This page will display all the watchlists including custom
                    ones.
                </Text> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 14,
    },
    // FlatList styles
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 10,
        flexDirection: 'row',
    },
    poster: {
        height: 100,
        width: 100,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
    listTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 8,
    },
});

export default WatchlistScreen;
