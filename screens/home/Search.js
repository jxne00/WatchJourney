import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { fetch_API_with_param } from '../../data/API';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './SearchStyles';

const SearchScreen = ({ navigation, route }) => {
  const { query } = route.params;
  const [searchQuery, setSearchQuery] = useState(query);
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [tvSearchResults, setTvSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('movie');

  // get search results of both movie and tvshows from API
  const getSearchResults = () => {
    fetch_API_with_param(`/search/movie?query=${searchQuery}`).then(
      (response) => setMovieSearchResults(response.results),
    );
    fetch_API_with_param(`/search/tv?query=${searchQuery}`).then((response) =>
      setTvSearchResults(response.results),
    );
  };

  useEffect(() => {
    // get search results of both movie and tvshows from API
    fetch_API_with_param(`/search/movie?query=${searchQuery}`).then(
      (response) => setMovieSearchResults(response.results),
    );
    fetch_API_with_param(`/search/tv?query=${searchQuery}`).then((response) =>
      setTvSearchResults(response.results),
    );
  }, [searchQuery]);

  // clears the search query and results
  const resetSearch = () => {
    setSearchQuery('');
    setMovieSearchResults([]);
    setTvSearchResults([]);
  };

  // renders a flatlist of search results
  const ResultsFlatlist = ({ searchResults }) => {
    const FlastlistRow = ({ item, isLastItem }) => (
      <TouchableOpacity
        key={item.id}
        style={[styles.searchResult, isLastItem ? {} : styles.borderBottom]}
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
            <MaterialIcons name="star" size={18} style={styles.ratingIcon} />
            <Text style={styles.ratingNumber}>{item.vote_average}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.searchResultsContainer}>
        <FlatList
          data={searchResults}
          style={styles.searchScrollStyle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <FlastlistRow
              item={item}
              isLastItem={index === searchResults.length - 1}
            />
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* search box */}
      <View style={styles.searchInputContainer}>
        <StatusBar style="light" />

        {/* 'X' icon to clear search input */}
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={resetSearch}>
            <MaterialIcons name="clear" style={styles.clearIcon} />
          </TouchableOpacity>
        )}

        {/* search input */}
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder={'Search for a movie or TV show'}
          autoCompleteType={'off'}
          autoCorrect={false}
          autoCapitalize={'none'}
          textContentType={'none'}
          contextMenuHidden={true}
          maxLength={100}
        />

        {/* search icon */}
        <TouchableOpacity onPress={getSearchResults}>
          <MaterialIcons name="search" size={30} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.resultsFound}>
        ({movieSearchResults.length} movies, {tvSearchResults.length} TV shows
        found)
      </Text>

      {/* buttons to display "tv show" or "movie" search results */}
      <SegmentedControl
        values={['Movies', 'TV Shows']}
        selectedIndex={searchType === 'movie' ? 0 : 1}
        onChange={(event) => {
          setSearchType(
            event.nativeEvent.selectedSegmentIndex === 0 ? 'movie' : 'tv',
          );
        }}
        badgeValues={[movieSearchResults.length, tvSearchResults.length]}
        tintColor={'#29292e'}
        style={styles.segBtnStyle}
        activeFontStyle={styles.segBtnActiveTextStyle}
        fontStyle={styles.segBtnTextStyle}
      />

      {/* display search results */}
      {searchType === 'movie' ? (
        <ResultsFlatlist searchResults={movieSearchResults} />
      ) : (
        <ResultsFlatlist searchResults={tvSearchResults} />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
