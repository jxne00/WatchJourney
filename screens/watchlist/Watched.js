import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
// to reload the screen so that newly added items are displayed
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Constants from '../../constants/constants';
import FetchMovies from './components/FetchWatchlist';
import removeMovieFromWatchlist from './components/RemoveFromList';

const WatchedMoviesScreen = ({ navigation }) => {
    const [watchedMovies, setWatchedMovies] = useState([]);

    // reload the screen whenever it is visited
    // so that newly added items are displayed
    useFocusEffect(
        React.useCallback(() => {
            // fetch movie data for 'Watched' list
            FetchMovies('Watched', setWatchedMovies);
            return () => {};
        }, []),
    );

    // Function to render each item in the FlatList
    const renderFlatlistItem = ({ item }) => {
        // display a message if there are no items in the list
        if (!item) {
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
                            'Watched',
                            item.id,
                            setWatchedMovies,
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
            <Text style={styles.mainTitle}>Watched movies</Text>
            <FlatList
                data={watchedMovies}
                renderItem={renderFlatlistItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // display 2 cards per row
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Constants.PRIMARY_COL,
        marginVertical: 20,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    },
    emptyListMsg: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#4f4f4f',
        fontFamily: Constants.POPPINS_REGULAR_FONT,
    },
    cardContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: Constants.SECONDARY_COL,
        borderRadius: 10,
        padding: 8,
        elevation: 3, // this adds a drop shadow to the card
    },
    removeItemContainer: {
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: '#0f0f0f',
        borderRadius: 5,
        padding: 3,
        left: 0,
        top: 0,
        zIndex: 1, // make button appear on top of image
    },
    removeItemButton: {
        color: '#fa7257',
        borderRadius: 5,
    },
    poster: {
        height: 150,
        borderRadius: 10,
    },
    movieTitle: {
        fontSize: 18,
        marginTop: 10,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    },
    popularity: {
        fontSize: 14,
        color: Constants.PRIMARY_COL,
        flexDirection: 'row',
        fontFamily: Constants.POPPINS_REGULAR_FONT,
    },
    starIcon: {
        color: '#ff9900',
        marginRight: 5,
    },
});

export default WatchedMoviesScreen;
