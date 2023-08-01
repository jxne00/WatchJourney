import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles/watchlistStyles';
import Constants from '../../constants/constants';
import { FetchMovies, FetchTvShows } from './components/FetchWatchlist';
import {
    removeMovieFromWatchlist,
    removeTvShowFromWatchlist,
} from './components/RemoveFromList';

const WatchLater = ({ navigation }) => {
    // set state to store details of watchlater movies
    const [watchlater, setWatchLater] = useState([]);
    // set state to store details of watchlater tv shows
    const [watchlaterTv, setWatchLaterTv] = useState([]);
    // state to determine if display movie or tv show list
    const [chosenButton, setChosenButton] = useState('MovieView');

    // reload the screen whenever it is visited
    // so that newly added items are displayed
    useFocusEffect(
        useCallback(() => {
            // fetch movie data for 'watch later' list
            FetchMovies('Watch Later', setWatchLater);
            // fetch tv show data for 'watch later' list
            FetchTvShows('Watch Later', setWatchLaterTv);
            return () => {};
        }, []),
    );

    /**
     * @description Renders a custom flatlist item for "Watch Later" movies.
     */
    const renderFlatlistItem = ({ item }) => (
        <View style={styles.cardContainer}>
            {/* Button to remove item from the list */}
            <TouchableOpacity
                style={styles.removeItemContainer}
                onPress={() =>
                    removeMovieFromWatchlist(
                        'Watch Later',
                        item.id,
                        setWatchLater,
                    )
                }>
                <MaterialIcons
                    name="highlight-remove"
                    size={30}
                    style={styles.removeItemButton}
                />
            </TouchableOpacity>
            {/* navigate to movie details page if clicked */}
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('MovieDetailPage', { item })
                }>
                {/* poster image of the movie */}
                <Image
                    style={styles.poster}
                    source={{
                        uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                    }}
                />

                {/* movie title and tagline */}
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.rating}>
                    <MaterialIcons
                        name="star"
                        size={14}
                        style={styles.starIcon}
                    />
                    {item.vote_average}
                </Text>
            </TouchableOpacity>
        </View>
    );

    /**
     * @description Renders a custom flatlist item for "watch later" tv shows.
     */
    const renderFlatlistItemTv = ({ item }) => (
        <View style={styles.cardContainer}>
            {/* Button to remove item from the list */}
            <TouchableOpacity
                style={styles.removeItemContainer}
                onPress={() =>
                    removeTvShowFromWatchlist(
                        'Watch Later',
                        item.id,
                        setWatchLaterTv,
                    )
                }>
                <MaterialIcons
                    name="highlight-remove"
                    size={30}
                    style={styles.removeItemButton}
                />
            </TouchableOpacity>
            {/* navigate to Tv show detail page if clicked */}
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('TVshowDetailPage', { item: item })
                }>
                {/* poster image of the movie */}
                <Image
                    style={styles.poster}
                    source={{
                        uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                    }}
                />

                {/* tv show title and tagline */}
                <Text style={styles.movieTitle}>{item.name}</Text>
                <Text style={styles.rating}>
                    <MaterialIcons
                        name="star"
                        size={14}
                        style={styles.starIcon}
                    />
                    {item.vote_average}
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.chosenBtnCont}>
                {/* button to display movie list */}
                <TouchableOpacity
                    style={
                        chosenButton === 'MovieView'
                            ? styles.chosenBtn
                            : styles.notChosenBtn
                    }
                    onPress={() => setChosenButton('MovieView')}>
                    <Text style={styles.buttonText}>Movies</Text>
                </TouchableOpacity>

                {/* button to display TV show list */}
                <TouchableOpacity
                    style={
                        chosenButton === 'TvView'
                            ? styles.chosenBtn
                            : styles.notChosenBtn
                    }
                    onPress={() => setChosenButton('TvView')}>
                    <Text style={styles.buttonText}>TV Shows</Text>
                </TouchableOpacity>
            </View>

            {/* display message if "watch later movies" list is empty */}
            {chosenButton === 'MovieView' && watchlater.length === 0 && (
                // display message if list is empty
                <Text style={styles.emptyListMsg}>
                    Add some movies to your list!
                </Text>
            )}

            {/* display message if "watch later tv shows" list is empty */}
            {chosenButton === 'TvView' && watchlaterTv.length === 0 && (
                // display message if list is empty
                <Text style={styles.emptyListMsg}>
                    Add some TV shows to your list!
                </Text>
            )}

            {/* render movies flatlist if "movie" button pressed 
            and "watchlater" contains items */}
            {chosenButton === 'MovieView' && watchlater.length > 0 && (
                <View>
                    <Text style={styles.flatlistTitle}>
                        Movies currently watching
                    </Text>
                    <FlatList
                        data={watchlater}
                        renderItem={renderFlatlistItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2} // display 2 cards per row
                    />
                    {/* display number of records found */}
                    <Text style={styles.numRecords}>
                        {watchlater.length} record(s) found
                    </Text>
                </View>
            )}

            {/* render tv show flatlist if "tv" button pressed 
            and "watchlaterTv" contains items */}
            {chosenButton === 'TvView' && watchlaterTv.length > 0 && (
                <View>
                    <Text style={styles.flatlistTitle}>
                        TV Shows currently watching
                    </Text>
                    <FlatList
                        data={watchlaterTv}
                        renderItem={renderFlatlistItemTv}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2} // display 2 cards per row
                    />
                    {/* display number of records found */}
                    <Text style={styles.numRecords}>
                        {watchlaterTv.length} record(s) found
                    </Text>
                </View>
            )}
        </View>
    );
};

export default WatchLater;
