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
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from '../constants/constants';
import styles from './styles/ShowDetailsStyle';
import WatchlistModal from './ShowModal';
import { useGenres } from '../data/GenresContext';

const ShowDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const { movieGenres, tvGenres } = useGenres();
  const [modalVisible, setModalVisible] = useState(false);

  // set variables based on whether item is a movie or tv show
  let genresList, showName, type, releaseDate, originalName;
  if (item.title) {
    // if movie
    showName = item.title;
    genresList = movieGenres;
    type = 'movie';
    releaseDate = item.release_date;
    originalName = item.original_title;
  } else {
    // if tv show
    showName = item.name;
    genresList = tvGenres;
    type = 'tv';
    releaseDate = item.first_air_date;
    originalName = item.original_name;
  }

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

          {/* show rating - go to reviw page when clicked */}
          <TouchableOpacity
            style={styles.ratingContainer}
            onPress={() =>
              navigation.navigate('ReviewsPage', {
                id: item.id,
                name: showName,
                type,
              })
            }>
            <Text style={styles.rating}>
              <MaterialIcons name="star" size={16} color={'#ff9900'} />{' '}
              {item.vote_average.toFixed(1)}
            </Text>
          </TouchableOpacity>

          {/* Button to add to watchlist - show modal when pressed. */}
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
          <WatchlistModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            type={type}
            show_id={item.id}
          />
        </ImageBackground>

        <View>
          {/* details of the show */}
          <Text style={styles.title}>{showName}</Text>
          {
            // display original name only if it is different from show name
            originalName !== showName && (
              <Text style={styles.subtitle}>({originalName})</Text>
            )
          }
          <View style={styles.dateShowType}>
            <Text style={styles.release}>({releaseDate}) &#x2022;</Text>
            <Text style={styles.showType}>
              {type === 'movie' ? 'Movie' : 'TV Show'}
            </Text>
          </View>
        </View>

        <View style={styles.horizontalLine} />

        {/* TV show overview */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overview}>{item.overview}</Text>

        <View style={styles.horizontalLine} />
        <Text style={styles.sectionTitle}>Genres</Text>

        {/* Get genre names based on id if array of genre_ids is passed in.
          Otherwise, display genre names passed in. */}
        <View style={styles.genresContainer}>
          {item.genre_ids
            ? item.genre_ids.map((index) => {
                // get genre names based on genre id
                const genres = genresList.find((genre) => genre.id === index);
                return (
                  <View style={styles.genre} key={index}>
                    <Text style={styles.genreText}>{genres?.name}</Text>
                  </View>
                );
              })
            : item.genres.map((genre, index) => (
                <View style={styles.genre} key={index}>
                  <Text style={styles.genreText}>{genre.name}</Text>
                </View>
              ))}
        </View>

        <View style={styles.horizontalLine} />

        {/* Button to see reviews - navigate to reviews page */}
        <Text style={styles.sectionTitle}>Reviews</Text>
        <TouchableOpacity
          style={styles.seeReviewsBtn}
          onPress={() =>
            navigation.navigate('ReviewsPage', {
              id: item.id,
              name: showName,
              type,
            })
          }>
          <Text style={styles.reviewLink}>See reviews</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowDetails;
