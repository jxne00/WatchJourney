import React, { useRef } from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import styles from './styles/DetailsCardStyles';
import Constants from '../constants/constants';
import { removeIDfromList } from '../data/AsyncActions';

const DetailsCard = ({
  data,
  navigation,
  watchlist,
  type,
  setStateItem,
  isEditing,
}) => {
  const jiggleAnim = useRef(new Animated.Value(0)).current;

  // animate the remove button when editing
  if (isEditing) {
    Animated.loop(
      Animated.sequence([
        Animated.timing(jiggleAnim, {
          toValue: 1.2,
          duration: 150,
          easing: Easing.inOut(Easing.sin), // for smoother animation
          useNativeDriver: true,
        }),
        Animated.timing(jiggleAnim, {
          toValue: -1.2,
          duration: 150,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  } else {
    jiggleAnim.setValue(0);
  }

  // interpolate the animated value to rotate the button
  const jiggleRotation = jiggleAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-5deg', '5deg'],
  });

  // add empty data to the list to make length even
  // so that last row of flatlist can be centered properly
  const handleUnevenData = (data, cols) => {
    const lastRow = data.length - Math.floor(data.length / cols) * cols;
    const toAdd = (cols - lastRow) % cols;

    for (let i = 0; i < toAdd; i++) {
      data.push({
        id: `empty-${toAdd + i}`,
        name: `empty-${toAdd + i}`,
        empty: true,
      });
    }

    return data;
  };

  const RenderCard = ({ item }) => {
    if (item.empty) {
      return <View style={[styles.cardContainer, styles.emptyItem]} />;
    }
    return (
      <View style={styles.cardContainer}>
        {isEditing && (
          // only show remove button on 'editing' mode
          <Animated.View
            style={[
              styles.removeItemContainer,
              {
                transform: [{ rotate: jiggleRotation }],
              },
            ]}>
            {/* Button to remove item from the list */}
            <TouchableOpacity
              style={styles.removeItemBtn}
              onPress={() =>
                removeIDfromList(watchlist, item.id, setStateItem, type)
              }>
              <FontAwesome name="remove" size={22} color={'#f31f1f'} />
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* navigate to show details page if clicked */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ShowDetailsPage', { item })}>
          {/* poster image of the movie */}
          <Image
            style={styles.poster}
            source={{
              uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
            }}
          />

          {/* show title and rating */}
          <Text style={styles.movieTitle}>{item.title || item.name}</Text>

          <Text style={styles.rating}>
            <MaterialIcons name="star" size={14} style={styles.starIcon} />
            {item.vote_average}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  handleUnevenData(data, 2);

  return (
    <FlatList
      data={data}
      renderItem={RenderCard}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ alignItems: 'center' }}
      numColumns={2} // display 2 cards per row
    />
  );
};

export default DetailsCard;
