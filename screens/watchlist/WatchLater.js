import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
// to reload the screen so that newly added items are displayed
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles/watchlistStyles';
import Constants from '../../constants/constants';
import FetchMovies from './components/FetchWatchlist';
import removeMovieFromWatchlist from './components/RemoveFromList';

const WatchLater = ({ navigation }) => {
    // set state to store details of watchlater movies
    const [watchlater, setWatchLater] = useState([]);

    // reload the screen whenever it is visited
    // so that newly added items are displayed
    useFocusEffect(
        React.useCallback(() => {
            // fetch movie data for 'Watched' list
            FetchMovies('Watch Later', setWatchLater);
            return () => {};
        }, []),
    );

    /**
     * @description Renders a custom flatlist item
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
                <Text style={styles.popularity}>
                    <MaterialIcons
                        name="star"
                        size={14}
                        style={styles.starIcon}
                    />
                    {item.popularity}
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* display message if list is empty */}
            {watchlater.length === 0 && (
                <Text style={styles.emptyListMsg}>
                    Add some movies to your list!
                </Text>
            )}
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
    );
};

export default WatchLater;
