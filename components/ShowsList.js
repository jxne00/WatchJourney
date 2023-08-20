import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Fetch_API_Data from '../data/API';
import ShowsListStyles from './styles/ShowsListStyle';
import Constants from '../constants/constants';
import WatchlistModal from './ShowModal';

/**
 * @description A flatlist of movies or tv shows
 * @param navigation - navigation object passed from parent component
 * @param type - 'movie' or 'tv'
 */
const ShowsList = ({ navigation, type }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenShowID, setChosenShowID] = useState(null);
  const [chosenShowName, setChosenShowName] = useState(null);

  const styles = ShowsListStyles();
  const flatListRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    // fetch trending movies/tv shows based on type
    Fetch_API_Data(`/trending/${type}/day`, `page=${page}`).then((response) =>
      setData(response),
    );
    setIsLoading(false);
  }, [page, type]);

  // set the selected show and display the modal
  const setChosenShow = async (id) => {
    setChosenShowID(id);
    setChosenShowName(
      data.results.find((show) => show.id === id).name ||
        data.results.find((show) => show.id === id).title,
    );
    setModalVisible(true);
  };

  // renders a cell in the flatlist
  const FlatlistCell = ({ item }) => (
    <View style={styles.showContainer}>
      {/* poster image */}
      <View style={styles.posterContainer}>
        {!imageLoaded && (
          // show loading indicator while image is loading
          <ActivityIndicator size="large" color={Constants.PRIMARY_COL} />
        )}
        <Image
          source={{
            uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
          }}
          style={styles.posterImage}
          onLoadEnd={() => setImageLoaded(true)}
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
        // pagination with 'back' and 'next' buttons
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

      {/* Modal to select watchlist */}
      <WatchlistModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        type={type}
        show_id={chosenShowID}
        showName={chosenShowName}
      />
    </View>
  );
};

export default ShowsList;
