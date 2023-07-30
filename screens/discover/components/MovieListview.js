import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

import styles from '../styles/MovieListViewStyles';
import Constants from '../../../constants/constants';

/**
 * @description A custom flatlist to display movies.
 * Each cell displays the poster image, title, and overview of the movie.
 * When the "+" button is pressed, a modal is displayed to allow
 * the user to select which watchlist they want to add the movie to.
 */
const MovieListView = ({ data, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [chosenMovieID, setChosenMovieID] = useState('');

    // when the "+" is pressed, set the selected movie and show the modal
    const onPressAdd = async (movie_id) => {
        setChosenMovieID(movie_id);
        setModalVisible(true);
    };

    // add 'chosenMovieID' into AsyncStorage with the key of '@{watchlist}_movielist'
    const addToMovieList = async (watchlist) => {
        // get data from AsyncStorage using key
        let currentList = JSON.parse(
            (await AsyncStorage.getItem(`@${watchlist}_movielist`)) || '[]',
        );

        // add chosenMovieID to list and store back to AsyncStorage
        currentList.push(chosenMovieID);
        await AsyncStorage.setItem(
            `@${watchlist}_list`,
            JSON.stringify(currentList),
        );
        console.log(chosenMovieID, 'added to', watchlist, 'list');
        // close modal after adding to list
        setModalVisible(false);
    };

    // renders a cell in the flatlist
    const FlatlistCell = ({ item }) => (
        <View style={styles.movieContainer}>
            {/* poster image of movie */}
            <View style={styles.posterContainer}>
                <Image
                    source={{
                        uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                    }}
                    style={styles.posterImage}
                />
                {/* show popup when button is pressed */}
                <TouchableOpacity
                    onPress={() => {
                        onPressAdd(item.id);
                    }}>
                    <MaterialIcons
                        name="playlist-add"
                        size={24}
                        style={styles.addToListBtn}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                // navigate to "Movie Details" screen on press
                onPress={() =>
                    navigation.navigate('MovieDetailPage', { item: item })
                }
                style={styles.movieDetails}>
                {/* title and overview of movie */}
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.movieOverview}>
                    {/* only show first 100 characters of overview */}
                    {item.overview.length > 150
                        ? `${item.overview.substring(0, 150)}... `
                        : item.overview}
                </Text>
                <Text style={styles.readMore}>See more &#x2192;</Text>
                {/* </View> */}
            </TouchableOpacity>
        </View>
    );
    return (
        <View>
            {/* render flatlist containing "FlatlistCell"s */}
            <FlatList
                data={data.results}
                renderItem={FlatlistCell}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.contentContainer}
            />
            {/* modal (popup to allow user to choose which list to add to) */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add to watchlist:</Text>
                        {/* render a button for each watchlist */}
                        {Constants.WATCHLISTS.map((watchList, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => addToMovieList(watchList)}
                                style={styles.modalBtnStyle}>
                                <Text style={styles.modelBtnText}>
                                    {watchList}
                                </Text>
                            </TouchableOpacity>
                        ))}

                        {/* close modal when cancel pressed */}
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(false);
                            }}>
                            <MaterialIcons
                                name="cancel"
                                size={30}
                                style={styles.modalCancelIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MovieListView;
