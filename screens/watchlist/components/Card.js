import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const MovieCard = ({ item }) => (
    <View style={styles.cardContainer}>
        <Image
            style={styles.poster}
            source={{
                uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.overview}</Text>
        <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeMovieFromAsyncStorage('watched', item.id)}>
            <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
    </View>
);
