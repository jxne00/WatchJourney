import React from 'react';
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import styles from '../watchlistStyles';
import Constants from '../../../constants/constants';
import removeIDfromList from './RemoveFromList';

const DetailsCard = ({ data, navigation, watchlist, type, setStateItem }) => {
  const RenderCard = ({ item }) => {
    // const type = data.title ? 'movie' : 'tv';

    return (
      <View style={styles.cardContainer}>
        {/* Button to remove item from the list */}
        <TouchableOpacity
          style={styles.removeItemContainer}
          onPress={() =>
            removeIDfromList(watchlist, item.id, setStateItem, type)
          }>
          <FontAwesome name="remove" size={25} color={'#f31f1f'} />
        </TouchableOpacity>

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

          {/* movie title and rating */}
          <Text style={styles.movieTitle}>{item.title || item.name}</Text>

          <Text style={styles.rating}>
            <MaterialIcons name="star" size={14} style={styles.starIcon} />
            {item.vote_average}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={RenderCard}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // display 2 cards per row
    />
  );
};

export default DetailsCard;
