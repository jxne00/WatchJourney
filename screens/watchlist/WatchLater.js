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

    // Function to render each item in the FlatList
    const renderFlatlistItem = ({ item }) => {
        // display a message if there are no items in the list
        if (item === undefined || item === null) {
            <Text style={styles.emptyListMsg}>
                Add some items to the list!
            </Text>;
        }
        return (
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
    };
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Watch Later</Text>
            <FlatList
                data={watchlater}
                renderItem={renderFlatlistItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // display 2 cards per row
            />
        </View>
    );
};

export default WatchLater;
