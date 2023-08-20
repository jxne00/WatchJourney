import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import WatchlistStyles from './WatchlistStyles';
import { FetchAPIwithAsync } from '../../data/AsyncActions';
import ShareWatchlist from '../../components/ShareWatchlist';
import DetailsCard from '../../components/DetailsCard';

const WatchlistScreen = ({ navigation, route }) => {
  const styles = WatchlistStyles();
  const { tabType } = route.params;
  const [watchlistShows, setWatchlistShows] = useState([]);
  const [type, setType] = useState('movie');
  const [isEditing, setIsEditing] = useState(false);

  // reload the screen whenever it is visited
  // so that newly added items are displayed
  useFocusEffect(
    useCallback(() => {
      // fetch data of movie/tvshows in watchlist
      type === 'movie'
        ? FetchAPIwithAsync(tabType, setWatchlistShows, 'movie')
        : FetchAPIwithAsync(tabType, setWatchlistShows, 'tv');
      return () => {};
    }, [type, tabType]),
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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
      {/* display message if watchlist is empty */}
      {watchlistShows.length === 0 &&
        (type === 'movie' ? (
          <Text style={styles.emptyListMsg}>Add some movies to your list!</Text>
        ) : (
          <Text style={styles.emptyListMsg}>
            Add some TV shows to your list!
          </Text>
        ))}
      {/* render flatlist if watchlist contains items */}
      {watchlistShows.length > 0 && (
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.flatlistTitle}>
              {/* set the title based on chosen tab and type */}
              {type === 'movie'
                ? tabType === 'Watched'
                  ? 'Movies watched'
                  : tabType === 'Watch Later'
                  ? 'Movies to watch later'
                  : 'Movies currently watching'
                : tabType === 'Watched'
                ? 'TV Shows watched'
                : tabType === 'Watch Later'
                ? 'TV shows to watch later'
                : 'TV Shows currently watching'}
            </Text>

            <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
              <MaterialCommunityIcons
                name={isEditing ? 'playlist-check' : 'playlist-edit'}
                size={26}
                color={isEditing ? 'green' : 'red'}
              />
            </TouchableOpacity>
          </View>

          {/* flatlist of tv shows/movies in the watchlist */}
          <DetailsCard
            data={watchlistShows}
            navigation={navigation}
            watchlist={tabType}
            type={type}
            setStateItem={setWatchlistShows}
            isEditing={isEditing}
          />

          {/* display number of records found */}
          <View style={styles.footer}>
            <Text style={styles.numRecords}>
              {watchlistShows.length} record(s) found
            </Text>

            {/* share button */}
            <TouchableOpacity
              style={styles.shareBtn}
              onPress={() => {
                // share the titles of the movies/tv shows in the list
                ShareWatchlist(type, watchlistShows, tabType);
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

export default WatchlistScreen;
