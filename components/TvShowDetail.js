import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Modal,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

import Constants from '../constants/constants';
import styles from './styles/MovieTvDetailsStyle';
import modalStyles from './styles/ModalStyles';
import genres from '../data/genres';
import { printAsyncKeyContent } from './AsyncActions';

// get a list of tv show genres
const tvGenres = genres.tv;

function TVshowDetails({ route, navigation }) {
    // state to determine show/hide modal
    const [modalVisible, setModalVisible] = useState(false);

    const { item } = route.params;

    /**
     * @description Add ID of TV show to selected watchlist in AsyncStorage
     */
    const addToTvList = async (watchlist) => {
        try {
            // key to use for AsyncStorage
            const storageKey = `@${watchlist}_tvlist`;

            // get data from AsyncStorage
            let currentList = JSON.parse(
                (await AsyncStorage.getItem(storageKey)) || '[]',
            );

            // check for duplicates
            if (currentList.includes(item.id)) {
                Alert.alert('This TV Show is already in the list');
                setModalVisible(false);
                return;
            }
            // add id to list and store back to AsyncStorage
            currentList.push(item.id);
            await AsyncStorage.setItem(storageKey, JSON.stringify(currentList));

            console.log(item.id, 'added to', storageKey);
            // print contents of AsyncStorage
            printAsyncKeyContent(storageKey);

            // close modal after adding to list
            setModalVisible(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <ScrollView style={styles.container}>
                {/* Set image backdrop image as background */}
                <ImageBackground
                    source={{
                        uri: `${Constants.POSTER_BASE_PATH}/original/${item.backdrop_path}`,
                    }}
                    style={styles.ImageBg}>
                    {/* Dark overlay on top of background image */}
                    <View style={styles.darkOverlay} />
                    {/* Poster image of show */}
                    <Image
                        source={{
                            uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                        }}
                        style={styles.posterImage}
                    />
                    {/* show rating */}
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

                    {/* Button to add to watchlist. modal is displayed when pressed. */}
                    <TouchableOpacity
                        style={styles.addToListBtn}
                        onPress={() => setModalVisible(true)}>
                        <MaterialIcons
                            name="playlist-add"
                            size={34}
                            style={styles.addToListIcon}
                        />
                    </TouchableOpacity>

                    {/* Modal to select watchlist */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}>
                        <View style={modalStyles.modalContainer}>
                            <View style={modalStyles.modalView}>
                                <Text style={modalStyles.modalText}>
                                    Add to TV watchlist:
                                </Text>

                                {/* render a button for each watchlist */}
                                {Constants.WATCHLISTS.map(
                                    (watchList, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() =>
                                                addToTvList(watchList)
                                            }
                                            style={modalStyles.modalBtnStyle}>
                                            <Text
                                                style={
                                                    modalStyles.modelBtnText
                                                }>
                                                {watchList}
                                            </Text>
                                        </TouchableOpacity>
                                    ),
                                )}

                                {/* close modal when cancel pressed */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}>
                                    <MaterialIcons
                                        name="cancel"
                                        size={30}
                                        style={modalStyles.modalCancelIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </ImageBackground>

                <View>
                    {/* details of the show */}
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.release}>({item.first_air_date})</Text>
                </View>
                <View style={styles.horizontalLine} />
                {/* TV show overview */}
                <Text style={styles.sectionTitle}>Overview</Text>
                <Text style={styles.overview}>{item.overview}</Text>

                <View style={styles.horizontalLine} />
                <Text style={styles.sectionTitle}>Genres</Text>
                {/* Display genres associated with the tv show.
                    The API returns 'item.genre_ids' when fetched from /discover endpoint,
                    and 'item.genres' when fetched through series_id. 
                    The code below handles both cases.
                */}
                <View style={styles.genresContainer}>
                    {item.genre_ids
                        ? item.genre_ids.map((index) => {
                              const tvGenre = tvGenres.find(
                                  (genre) => genre.id === index,
                              );
                              return (
                                  <View style={styles.genre} key={index}>
                                      <Text style={styles.genreText}>
                                          {tvGenre?.name}
                                      </Text>
                                  </View>
                              );
                          })
                        : item.genres.map((genre, index) => (
                              <View style={styles.genre} key={index}>
                                  <Text style={styles.genreText}>
                                      {genre.name}
                                  </Text>
                              </View>
                          ))}
                </View>

                <View style={styles.horizontalLine} />
                <Text style={styles.sectionTitle}>Reviews</Text>
                <TouchableOpacity
                    style={styles.seeReviewsBtn}
                    onPress={() =>
                        navigation.navigate('ReviewsPage', {
                            id: item.id,
                            name: item.name,
                            type: 'tv',
                        })
                    }>
                    <Text style={styles.reviewLink}>View reviews</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default TVshowDetails;
