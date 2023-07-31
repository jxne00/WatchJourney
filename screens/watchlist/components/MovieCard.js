import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from '../styles/watchlistStyles';
import Constants from '../../../constants/constants';
import removeMovieFromWatchlist from '../components/RemoveFromList';

const MovieCard = ({ navigation, item, listSetState }) => {
    // display a message if there are no items in the list
    if (!item) {
        <Text style={styles.emptyListMsg}>Add some items to the list!</Text>;
    }
    return (
        <View style={styles.cardContainer}>
            {/* Button to remove item from the list */}
            <TouchableOpacity
                style={styles.removeItemContainer}
                onPress={() =>
                    removeMovieFromWatchlist('Watched', item.id, listSetState)
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

export default MovieCard;
