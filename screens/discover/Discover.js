import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Fetch_API_Data from '../../data/api';
import Constants from '../../constants/constants';

import MovieListView from './components/MovieListview';
import MovieCardView from './components/MovieCardView';

/**
 * @description The discover page displays a list of movies
 */
function DiscoverScreen({ navigation }) {
    const [data, setData] = useState([]);

    // fetch popular movies from API
    useEffect(() => {
        Fetch_API_Data('/discover/movie')
            .then((json) => setData(json))
            .catch((err) => console.alert(err));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Movies</Text>
            {/* flatlist diplaying a list of movies */}
            {MovieListView({ data, navigation })}
            {/* flatlist displaying a list of movies in cards */}
            {/* {MovieCardView({ data, navigation })} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Constants.SECONDARY_COL,
        paddingBottom: 50,
    },
    header: {
        fontSize: 24,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        marginBottom: 10,
    },
});

export default DiscoverScreen;
