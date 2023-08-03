import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from '../../../constants/constants';

const OFFSET = 40;
const windowWidth = Dimensions.get('window').width;
const ITEM_WIDTH = windowWidth - OFFSET * 2;
const ITEM_HEIGHT = 180;

/**
 * @description A custom carousel card to that displays movie poster and title.
 * @param item - movie object
 * @param index - index of movie
 * @param scrollX - scroll position
 * @param last_index - index of last movie object (used to determine margins)
 */
const CarouselCard = ({ item, index, scrollX, last_index, navigation }) => {
  const inputRange = [
    (index - 1) * ITEM_WIDTH, // scroll pos of previous card
    index * ITEM_WIDTH, // scroll pos of current card
    (index + 1) * ITEM_WIDTH, // scroll pos of next card
  ];

  // make middle card bigger than left and right cards
  const translation = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1.1, 0.8],
  });

  // lower the opacity of left and right cards
  const setOpacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  });

  let poster_src;

  // use placeholder image if poster & backdrop from API are null
  if (!item.backdrop_path && !item.poster_path) {
    poster_src = require('../../../assets/images/poster-placeholder.png');
  } else {
    // use poster path if backdrop path is null
    poster_src = item.backdrop_path
      ? {
          uri: `${Constants.POSTER_BASE_PATH}/original/${item.backdrop_path}`,
        }
      : {
          uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
        };
  }

  return (
    // go to movie details page when card is pressed
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('MovieDetailPage', {
          item: item,
        })
      }>
      <Animated.View
        style={[
          styles.animatedView,
          {
            marginLeft: index === 0 ? OFFSET : 0,
            marginRight: index === last_index ? OFFSET : 0,
            opacity: setOpacity,
            transform: [{ scale: translation }],
          },
        ]}>
        <ImageBackground
          source={poster_src}
          style={styles.imgBgStyle}
          imageStyle={{ borderRadius: 20 }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {/* only show first 50 chars of title */}
            {item.title.length > 25
              ? item.title.slice(0, 25) + '...'
              : item.title}
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            <MaterialIcons name="star" size={16} color={'#deb72d'} />
            {item.vote_average}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgBgStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: ITEM_WIDTH * 0.9,
    height: 40,
    backgroundColor: '#cc8de9',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#1a1a1a',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#010101',
    fontSize: 16,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
  },
  animatedView: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  ratingContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#b4562e',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: '#e7e5e7',
    fontFamily: Constants.POPPINS_ITALIC_FONT,
    fontSize: 16,
  },
});

export default CarouselCard;
