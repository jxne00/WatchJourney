import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Constants from '../../constants/constants';
import Fetch_API_Data from '../../data/api';

import { printAllAsyncContent } from '../../components/PrintAsyncContent';
import FetchMovieWatchlist from './components/FetchWatchlist';

const WatchlistScreen = () => {
    // states for each watchlist
    const [watchedList, setWatchedList] = useState([]);
    const [watchingList, setWatchingList] = useState([]);
    const [intendList, setIntendList] = useState([]);

    useEffect(() => {
        FetchMovieWatchlist('Watched', setWatchedList);
        FetchMovieWatchlist('Watching Now', setWatchingList);
        FetchMovieWatchlist('Intend to Watch', setIntendList);
    }, []);

    // remove an item from a watchlist
    // const removeMovieAsync = async (
    //     watchlist,
    //     movieID_toRemove,
    //     setMovieList,
    // ) => {
    //     let storageKey = `@${watchlist}_movielist`;

    //     // get list of movie IDs from AsyncStorage
    //     let movieIDs = JSON.parse(await AsyncStorage.getItem(storageKey)) || [];

    //     // remove 'movieID_toRemove' from the list
    //     movieIDs = movieIDs.filter((movie_id) => movie_id !== movieID_toRemove);

    //     // update AsyncStorage with updated list
    //     await AsyncStorage.setItem(storageKey, JSON.stringify(movieIDs));

    //     setMovieList(movieIDs);
    // };

    // render each item in the FlatList
    const renderFlatlistItem = (item) => (
        <View style={styles.itemContainer}>
            {/* <Image
                style={styles.poster}
                source={{
                    uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                }}
            /> */}
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
                />

                <Text style={styles.listTitle}>Watching Now</Text>
                <FlatList
                    data={watchingList}
                    renderItem={renderFlatlistItem}
                    keyExtractor={(item) => item.id.toString()}
                />

                <Text style={styles.listTitle}>Intend to Watch</Text>
                <FlatList
                    data={intendList}
                    renderItem={renderFlatlistItem}
                    keyExtractor={(item) => item.id.toString()}
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
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 10,
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
        color: '#585858',
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 5,
    },
});

export default WatchlistScreen;
