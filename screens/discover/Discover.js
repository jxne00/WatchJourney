import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Fetch_API_Data from '../../data/api';
import Constants from '../../constants/constants';

import moviesFlatlist from './components/MovieFlatlist';

/**
 * @description The discover page displays a list of movies
 */
function DiscoverScreen({ navigation }) {
    const [data, setData] = useState([]);

    // fetch movie data from API
    useEffect(() => {
        Fetch_API_Data('/discover/movie')
            .then((json) => setData(json))
            .catch((err) => console.alert(err));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Movies</Text>
            {/* flatlist diplaying a list of movies */}
            {moviesFlatlist({ data, navigation })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Constants.SECONDARY_COL,
    },
    header: {
        fontSize: 24,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        marginBottom: 10,
    },
});

export default DiscoverScreen;
