import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles/watchlistStyles';
// import { FetchMovies, FetchTvShows } from './components/FetchWatchlist';
import { FetchAPIwithAsync } from '../../components/AsyncActions';
import ShareWatchlist from './components/ShareWatchlist';
import DetailsCard from './components/DetailsCard';

const WatchedScreen = ({ navigation }) => {
  const [watchedShows, setWatchedShows] = useState([]);
  const [type, setType] = useState('movie');

  // reload the screen whenever it is visited
  // so that newly added items are displayed
  useFocusEffect(
    useCallback(() => {
      // fetch movie/tv show data for 'Watched' list
      type === 'movie'
        ? FetchAPIwithAsync('Watched', setWatchedShows, 'movie')
        : FetchAPIwithAsync('Watched', setWatchedShows, 'tv');
      return () => {};
    }, [type]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.chosenBtnCont}>
        {/* button to display movie list */}
        <TouchableOpacity
          style={type === 'movie' ? styles.chosenBtn : styles.notChosenBtn}
          onPress={() => setType('movie')}>
          <Text style={styles.buttonText}>Movies</Text>
        </TouchableOpacity>

        {/* button to display TV show list */}
        <TouchableOpacity
          style={type === 'tv' ? styles.chosenBtn : styles.notChosenBtn}
          onPress={() => setType('tv')}>
          <Text style={styles.buttonText}>TV Shows</Text>
        </TouchableOpacity>
      </View>

      {/* display message if "watched" list is empty */}
      {watchedShows.length === 0 &&
        (type === 'movie' ? (
          <Text style={styles.emptyListMsg}>Add some movies to your list!</Text>
        ) : (
          <Text style={styles.emptyListMsg}>
            Add some TV shows to your list!
          </Text>
        ))}

      {/* render flatlist if "watched" list contains items */}
      {watchedShows.length > 0 && (
        <View>
          <Text style={styles.flatlistTitle}>
            {type === 'movie'
              ? 'Movies currently watching'
              : 'TV Shows currently watching'}
          </Text>

          <DetailsCard
            data={watchedShows}
            navigation={navigation}
            watchlist={'Watched'}
            type={type}
            setStateItem={setWatchedShows}
          />

          {/* display number of records found */}
          <View style={styles.footer}>
            <Text style={styles.numRecords}>
              {watchedShows.length} record(s) found
            </Text>

            {/* share button */}
            <TouchableOpacity
              style={styles.shareBtn}
              onPress={() => {
                // share the titles of the movies/tv shows in the list
                ShareWatchlist(type, watchedShows, 'Watched');
              }}>
              <FontAwesome
                name="share-square-o"
                size={25}
                style={styles.shareIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default WatchedScreen;
