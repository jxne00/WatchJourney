import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
    Alert,
    ActivityIndicator,
    Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

import { fetch_API_with_param } from '../data/API/api';
import styles from './styles/MovieTvListStyle';
import Constants from '../constants/constants';
import { printAsyncKeyContent } from './AsyncActions';

/**
 * @description A custom flatlist to display TV shows.
 * Each cell displays the poster image, title, and overview of the TV show.
 * When the "+" button is pressed, a modal is displayed to allow
 * selection of which watchlist to add the show to.
 */
const TvListView = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [chosenTvID, setChosenTvID] = useState(null);

    const flatListRef = useRef();

    // fetch popular tv shows
    // docs: https://developer.themoviedb.org/reference/discover-tv
    useEffect(() => {
        setIsLoading(true);
        fetch_API_with_param(`/tv/top_rated?language=en-US&page=${page}`).then(
            (response) => setData(response),
        );
        setIsLoading(false);
    }, [page]);

    // when the "+" is pressed, set the selected show and show the modal
    const setChosenTvShow = async (tv_id) => {
        setChosenTvID(tv_id);
        setModalVisible(true);
    };

    // add 'chosenTvID' into AsyncStorage with the key of '@{watchlist}_tvlist'
    const addToTvList = async (watchlist) => {
        try {
            // key to use for AsyncStorage
            const storageKey = `@${watchlist}_tvlist`;

            // get data from AsyncStorage
            let currentList = JSON.parse(
                (await AsyncStorage.getItem(storageKey)) || '[]',
            );

            // check if tv show is already in list
            if (currentList.includes(chosenTvID)) {
                Alert.alert('The show is already in the list');
                setModalVisible(false);
                return;
            }
            // add chosenTvID to list and store back to AsyncStorage
            currentList.push(chosenTvID);
            await AsyncStorage.setItem(storageKey, JSON.stringify(currentList));

            console.log(chosenTvID, 'added to', storageKey);
            // printAllAsyncContent();
            printAsyncKeyContent(storageKey);

            // close modal after adding to list
            setModalVisible(false);
        } catch (error) {
            // exception handling
            console.log(error);
        }
    };

    // renders a cell in the flatlist
    const FlatlistCell = ({ item }) => (
        <View style={styles.showContainer}>
            {/* poster image of tvshow */}
            <View style={styles.posterContainer}>
                <Image
                    source={{
                        uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                    }}
                    style={styles.posterImage}
                />
                {/* show popup when button is pressed */}
                <TouchableOpacity
                    style={styles.addToListBtn}
                    onPress={() => {
                        // set the chosen tv show and display modal
                        setChosenTvShow(item.id);
                    }}>
                    <MaterialIcons
                        name="playlist-add"
                        size={24}
                        style={styles.addToListIcon}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                // navigate to "TV Show Details" screen on press
                onPress={() =>
                    navigation.navigate('TVshowDetailPage', { item: item })
                }
                style={styles.showDetails}>
                {/* title and overview of tv show */}
                <Text style={styles.showTitle}>{item.name}</Text>
                <Text style={styles.showOverview}>
                    {/* only show first 100 characters of overview */}
                    {item.overview.length > 100
                        ? `${item.overview.substring(0, 100)}... `
                        : item.overview}
                </Text>
                <Text style={styles.readMore}>See more &#x2192;</Text>
                {/* </View> */}
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.contentContainer}>
            {/* render flatlist containing "FlatlistCell"s */}
            <FlatList
                ref={flatListRef}
                data={data.results}
                renderItem={FlatlistCell}
                keyExtractor={(item) => item.id.toString()}
                ListFooterComponent={
                    isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <View style={styles.footer}>
                            <Button
                                title="< Back"
                                onPress={() => {
                                    setPage(Math.max(1, page - 1));
                                }}
                                disabled={page === 1}
                            />

                            <Text style={styles.pageNum}>page {page}</Text>

                            <Button
                                title="Next >"
                                onPress={() => {
                                    setPage(page + 1); // scroll to top of flatlist when 'next' is pressed
                                    flatListRef.current.scrollToOffset({
                                        animated: true,
                                        offset: 0,
                                    });
                                }}
                            />
                        </View>
                    )
                }
            />
            {/* modal (popup to allow user to choose which list to add to) */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Add to TV watchlist:
                        </Text>
                        {/* render a button for each watchlist */}
                        {Constants.WATCHLISTS.map((watchList, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => addToTvList(watchList)}
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

export default TvListView;
