import React, { useState, useEffect, useRef, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Fetch_API_Data from '../../data/API';
import Constants from '../../constants/constants';
import HomeStyles from './HomeStyles';
import CarouselCard from '../../components/CarouselCard';
import { useGenres } from '../../data/GenresContext';
import { ThemeContext } from '../../data/ThemeContext';
import {
  registerForPushNotif,
  schedulePushNotif,
} from '../../components/HandleNotifications';

const HomeScreen = ({ navigation }) => {
  const styles = HomeStyles();
  const [nowShowing, setNowShowing] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [nowAiring, setNowAiring] = useState([]);
  const { movieGenres, setMovieGenres, tvGenres, setTvGenres } = useGenres();
  const { theme, toggleTheme } = useContext(ThemeContext);

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

  useEffect(() => {
    registerForPushNotif();

    // select random movie to display in notification
    const randVal = Math.floor(Math.random() * nowShowing.length);
    const movie = nowShowing[randVal];

    // send notif 3 seconds after loading home screen
    const timer = setTimeout(() => {
      schedulePushNotif(movie.title);
    }, 3000);

    // clear timer if user leaves home screen
    return () => clearTimeout(timer);
  }, [nowShowing]);

  // clears the search query and results
  const resetSearch = () => {
    setSearchQuery('');
  };

  return (
    // dismiss keyboard when outside of text input is pressed
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />

        <View style={styles.container}>
          {/* <View style={styles.headerContainer}> */}
          {/* App Name */}
          <Text style={styles.appname}>WatchJourney</Text>

          <MaterialIcons
            name="brightness-6"
            size={24}
            color={theme === 'light' ? '#000' : '#fff'}
            style={styles.themeSwitch}
            onPress={toggleTheme}
          />
          {/* </View> */}

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

          {/* ========= "Now In Theatres" carousel cards ========= */}
          <View>
            <View style={styles.sectionContainer}>
              <MaterialIcons name="movie" size={24} style={styles.icons} />
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
              <MaterialIcons name="live-tv" size={24} style={styles.icons} />
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
