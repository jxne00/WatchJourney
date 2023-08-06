import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { fetch_API_with_param } from '../data/API/api';
import styles from './styles/ShowsListStyle';
import Constants from '../constants/constants';
import { addShowToAsync } from './AsyncActions';

const ShowsList = ({ navigation, type }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenShowID, setChosenShowID] = useState(null);

  const flatListRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    // fetch popular movies/tv shows based on type
    const endpoint = type === 'movie' ? '/movie/popular' : '/tv/top_rated';
    fetch_API_with_param(`${endpoint}?language=en-US&page=${page}`).then(
      (response) => setData(response),
    );
    setIsLoading(false);
  }, [page, type]);

  // set the selected show and display the modal
  const setChosenShow = async (id) => {
    setChosenShowID(id);
    setModalVisible(true);
  };

  // renders a cell in the flatlist
  const FlatlistCell = ({ item }) => (
    <View style={styles.showContainer}>
      {/* poster image */}
      <View style={styles.posterContainer}>
        <Image
          source={{
            uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
          }}
          style={styles.posterImage}
        />

        {/* show modal when button is pressed */}
        <TouchableOpacity
          style={styles.addToListBtn}
          onPress={() => {
            setChosenShow(item.id);
          }}>
          <MaterialIcons
            name="playlist-add"
            size={24}
            style={styles.addToListIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        // navigate to "ShowDetails" component on press
        onPress={() => navigation.navigate('ShowDetailsPage', { item })}
        style={styles.showDetails}>
        {/* title and overview of tv show */}
        <Text style={styles.showTitle}>{item.name || item.title}</Text>

        <Text style={styles.showOverview}>
          {/* only show first 100 characters of overview */}
          {item.overview.length > 100
            ? `${item.overview.substring(0, 100)}... `
            : item.overview}
        </Text>

        <Text style={styles.readMore}>See more &#x2192;</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      <FlatList
        ref={flatListRef}
        data={data.results}
        // flatlist cells containing movie/tv show details
        renderItem={FlatlistCell}
        keyExtractor={(item) => item.id.toString()}
        // header
        ListHeaderComponent={
          <Text style={styles.header}>
            {type === 'movie' ? 'Popular Movies' : 'Top Rated TV Shows'}
          </Text>
        }
        // pagination
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

      {/* modal to allow user to choose which list to add to */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add to TV watchlist:</Text>
            {/* render a button for each watchlist */}
            {Constants.WATCHLISTS.map((watchList, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  addShowToAsync(watchList, type, chosenShowID, setModalVisible)
                }
                style={styles.modalBtnStyle}>
                <Text style={styles.modelBtnText}>{watchList}</Text>
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

export default ShowsList;
