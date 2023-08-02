import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './DiscoverStyles';

// import flatlist components
import MovieListView from '../../components/MovieListview';
import TvListView from '../../components/TvListView';

/**
 * @description The discover screen displays a list of movies and tv shows.
 */
function DiscoverScreen({ navigation }) {
    const [selectedButton, setSelectedButton] = useState('MovieListView');

    const setChosenButton = (button) => {
        setSelectedButton(button);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.chosenBtnCont}>
                {/* button to display movie list */}
                <TouchableOpacity
                    style={
                        // set a different style for chosen button
                        selectedButton == 'MovieListView'
                            ? styles.chosenBtn
                            : styles.notChosenBtn
                    }
                    onPress={() => setChosenButton('MovieListView')}>
                    <Text style={styles.buttonText}>Movies</Text>
                </TouchableOpacity>

                {/* button to display TV show list */}
                <TouchableOpacity
                    style={
                        // set a different style for chosen button
                        selectedButton == 'TvListView'
                            ? styles.chosenBtn
                            : styles.notChosenBtn
                    }
                    onPress={() => setChosenButton('TvListView')}>
                    <Text style={styles.buttonText}>TV Shows</Text>
                </TouchableOpacity>
            </View>

            {/* display view according to button pressed */}
            {selectedButton === 'MovieListView' && (
                <View>
                    <Text style={styles.header}>Movies</Text>
                    <MovieListView navigation={navigation} />
                </View>
            )}
            {selectedButton === 'TvListView' && (
                <View>
                    <Text style={styles.header}>TV Shows</Text>
                    <TvListView navigation={navigation} />
                </View>
            )}
        </View>
    );
}

export default DiscoverScreen;
