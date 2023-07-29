import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Constants from '../../../constants/constants';

/**
 * @description A custom flatlist to display movies
 */
const MovieListView = ({ data, navigation }) => {
    // const [lists, setLists] = useState({
    //     watchingNow: [],
    //     watched: [],
    //     intendToWatch: [],
    // });

    // renders a cell in the flatlist
    const FlatlistCell = ({ item }) => (
        <TouchableOpacity
            // navigate to "Movie Details" screen on press
            onPress={() =>
                navigation.navigate('MovieDetailPage', { item: item })
            }>
            <View style={styles.movieContainer}>
                {/* poster image of movie */}
                <View style={styles.posterContainer}>
                    <Image
                        source={{
                            uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                        }}
                        style={styles.posterImage}
                    />
                </View>
                {/* title and overview of movie */}
                <View style={styles.movieDetails}>
                    <Text style={styles.movieTitle}>{item.title}</Text>
                    <Text style={styles.movieOverview}>
                        {/* only show first 100 characters of overview */}
                        {item.overview.length > 100
                            ? `${item.overview.substring(0, 100)}... `
                            : item.overview}
                    </Text>
                    <Text style={styles.readMore}>See more &#x2192;</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        // render flatlist containing "FlatlistCell"s
        <FlatList
            data={data.results}
            renderItem={FlatlistCell}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.content_container}
        />
    );
};

const styles = StyleSheet.create({
    content_container: {
        paddingVertical: 5,
        backgroundColor: Constants.SECONDARY_COL,
    },
    movieContainer: {
        flexDirection: 'row',
        padding: 6,
        backgroundColor: Constants.SECONDARY_COL,
        borderWidth: 1,
        borderColor: Constants.PRIMARY_COL,
        borderRadius: 10,
        shadowOffset: { width: -3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 2,
        marginBottom: 10,
    },
    posterContainer: {
        borderRightColor: Constants.PRIMARY_COL,
        borderRightWidth: 1,
        marginRight: 6,
    },
    posterImage: {
        resizeMode: 'cover',
        width: 70,
        height: 88,
        borderRadius: 6,
        marginRight: 6,
    },
    movieDetails: {
        flex: 1,
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    movieOverview: {
        fontSize: 14,
        lineHeight: 16,
        color: '#727272',
    },
    readMore: {
        color: '#0480a2',
        fontFamily: Constants.POPPINS_ITALIC_FONT,
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        fontSize: 12,
    },
});

export default MovieListView;
