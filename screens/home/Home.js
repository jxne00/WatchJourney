import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Fetch_API_Data from '../../data/API';
import Constants from '../../constants/constants';
import styles from './HomeStyles';
import CarouselCard from '../../components/CarouselCard';
import { useGenres } from '../../data/GenresContext';

const HomeScreen = ({ navigation }) => {
  const [nowShowing, setNowShowing] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [nowAiring, setNowAiring] = useState([]);
  const { movieGenres, setMovieGenres, tvGenres, setTvGenres } = useGenres();

  const OFFSET = 40;
  const ITEM_WIDTH = Constants.WIDTH - OFFSET * 2;

  // values to track scroll positions of carousel cards
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollX2 = useRef(new Animated.Value(0)).current;

  // fetch movie and tv genres
  useEffect(() => {
    // fetch the list of movie genres, and store to context
    if (movieGenres.length === 0) {
      Fetch_API_Data('/genre/movie/list').then((response) => {
        setMovieGenres(response.genres);
      });
    }
    // fetch the list of tv genres, and store to context
    if (tvGenres.length === 0) {
      Fetch_API_Data('/genre/tv/list').then((response) => {
        setTvGenres(response.genres);
      });
    }
  }, [movieGenres, setMovieGenres, tvGenres, setTvGenres]);

  useEffect(() => {
    // fetch movies showing in theaters now
    Fetch_API_Data('/movie/upcoming', 'language=en-US&page=1').then(
      (response) => setNowShowing(response.results),
    );
    // fetch tv shows airing today
    Fetch_API_Data('/tv/airing_today', 'language=en-US&page=1').then(
      (response) => setNowAiring(response.results),
    );
  }, [setNowAiring, setNowShowing]);

  // clears the search query and results
  const resetSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  /**
   * @description function to render search results
   */
  const renderSearchResults = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.searchResult}
      onPress={() => navigation.navigate('ShowDetailsPage', { item })}>
      {/* "item.title" for movies, "item.name" for tvshows */}
      <Text style={styles.title}>{item.title || item.name}</Text>

      <View style={styles.releaseRating}>
        <Text style={styles.releaseDate}>
          {/* "item.release_date" for movies, "item.first_air_date" for tvshows */}
          ({item.release_date || item.first_air_date}) &#x2022;
        </Text>

        {/* display rating */}
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" style={styles.ratingIcon} />
          <Text style={styles.ratingNumber}>{item.vote_average}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    // dismiss keyboard when outside of text input is pressed
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.container}>
          {/* App Name */}
          <Text style={styles.appname}>WatchJourney</Text>

          <View style={styles.horizontalLine} />

          {/* search box */}
          <View style={styles.searchBoxContainer}>
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={resetSearch}>
                <MaterialIcons name="clear" style={styles.clearIcon} />
              </TouchableOpacity>
            )}
            <TextInput
              style={styles.searchInput}
              placeholder={'Search for a movie or TV show'}
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
              autoCompleteType={'off'}
              textContentType={'none'}
              autoCorrect={false}
              autoCapitalize="none"
              contextMenuHidden={true}
              maxLength={100}
            />

            {/* navigate to 'SearchResults' page when search icon pressed */}
            <TouchableOpacity
              onPress={() => {
                // only navigate if search query is not empty
                searchQuery.length > 0 &&
                  navigation.navigate('SearchResultsPage', {
                    query: searchQuery,
                  });
              }}>
              <MaterialIcons name="search" style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          {/* display search results */}
          {searchResults.length > 0 && (
            <View style={styles.searchResultsContainer}>
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                style={styles.searchScrollStyle}
                renderItem={renderSearchResults}
              />
            </View>
          )}

          {/* ========= "Now In Theatres" carousel cards ========= */}
          <View>
            <View style={styles.sectionContainer}>
              <MaterialIcons name="movie" size={24} />
              <Text style={styles.sectionTitle}> Now In Theatres</Text>
            </View>

            <ScrollView
              horizontal={true}
              decelerationRate={'normal'}
              snapToInterval={ITEM_WIDTH}
              style={styles.scrollviewStyle}
              showsHorizontalScrollIndicator={false}
              disableIntervalMomentum
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false },
              )}
              scrollEventThrottle={12}>
              {/* render custom carousel cards */}
              {nowShowing.map((item, index) => (
                <CarouselCard
                  key={item.id}
                  item={item}
                  navigation={navigation}
                  index={index}
                  scrollX={scrollX}
                  last_index={nowShowing.length - 1}
                />
              ))}
            </ScrollView>
          </View>

          {/* ========= "Now On Air" carousel cards ========= */}
          <View>
            <View style={styles.sectionContainer}>
              <MaterialIcons name="live-tv" size={24} />
              <Text style={styles.sectionTitle}> Now On Air</Text>
            </View>

            <ScrollView
              horizontal={true}
              decelerationRate={'normal'}
              snapToInterval={ITEM_WIDTH}
              style={styles.scrollviewStyle}
              showsHorizontalScrollIndicator={false}
              disableIntervalMomentum
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX2 } } }],
                { useNativeDriver: false },
              )}
              scrollEventThrottle={12}>
              {/* render custom carousel cards */}
              {nowAiring.map((item, index) => (
                <CarouselCard
                  key={item.id}
                  item={item}
                  navigation={navigation}
                  index={index}
                  scrollX={scrollX2}
                  last_index={nowAiring.length - 1}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
