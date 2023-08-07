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
import { Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { fetch_API_with_param } from '../../data/API/api';
import Constants from '../../constants/constants';
import styles from './HomeStyles';
import GradientText from '../../components/GradientText';
import CarouselCard from './components/CarouselCard';

const HomeScreen = ({ navigation }) => {
  const [nowShowing, setNowShowing] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const OFFSET = 40;
  const ITEM_WIDTH = Constants.WIDTH - OFFSET * 2;

  // value to track scroll position of carousel cards
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // fetch movies showing in theaters now
    // docs: https://developer.themoviedb.org/reference/movie-now-playing-list
    fetch_API_with_param('/movie/now_playing').then((response) =>
      setNowShowing(response.results),
    );
  }, []);

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
        <View style={styles.container}>
          <StatusBar style="dark" />

          {/* App Name */}
          <GradientText
            style={styles.appname}
            colors={['#688CB6', '#42648A', '#283C53']}>
            WatchJourney{' '}
          </GradientText>
          <Divider />

          {/* =========== Search section =========== */}

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

          {/* ========= carousel cards ========= */}
          <View>
            <View style={styles.sectionContainer}>
              <MaterialIcons name="movie" size={24} />
              <Text style={styles.sectionTitle}> In Theatres Now</Text>
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

          <View style={styles.horizontalLine}></View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
