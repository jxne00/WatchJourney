import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ImageBackground,
    ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Constants from '../constants/constants';
import styles from './styles/MovieTvDetailsStyle';
import genres from '../data/genres';

// get a list of movie genres
const movieGenres = genres.movie;

function MovieDetails({ route }) {
    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                {/* Set backdrop image as background */}
                <ImageBackground
                    source={{
                        uri: `${Constants.POSTER_BASE_PATH}/original/${item.backdrop_path}`,
                    }}
                    style={styles.ImageBg}>
                    {/* Dark overlay on top of background image */}
                    <View style={styles.darkOverlay} />

                    {/* Poster image of movie */}
                    <Image
                        source={{
                            uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                        }}
                        style={styles.posterImage}
                    />
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>
                            <MaterialIcons
                                name="star"
                                size={16}
                                color={'#ff9900'}
                            />{' '}
                            {item.vote_average}
                        </Text>
                    </View>
                </ImageBackground>

                <View>
                    {/* details of the movie */}
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.release}>({item.release_date})</Text>
                </View>
                <View style={styles.horizontalLine} />
                <Text style={styles.sectionTitle}>Overview</Text>
                <Text style={styles.overview}>{item.overview}</Text>

                <View style={styles.horizontalLine} />
                <Text style={styles.sectionTitle}>Genres</Text>

                {/* map through genre IDs associated to the movie and map it to its name using data stored in data/genres.js */}
                <View style={styles.genresContainer}>
                    {item.genre_ids.map((index) => {
                        const movieGenre = movieGenres.find(
                            (genre) => genre.id === index,
                        );
                        return (
                            <View style={styles.genre} key={index}>
                                <Text style={styles.genreText}>
                                    {movieGenre?.name}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MovieDetails;
