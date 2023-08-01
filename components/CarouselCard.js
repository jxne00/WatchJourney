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
import Constants from '../constants/constants';

const OFFSET = 40;
const windowWidth = Dimensions.get('window').width;
const ITEM_WIDTH = windowWidth - OFFSET * 2;
const ITEM_HEIGHT = 200;

/**
 * @description A custom carousel card to that displays movie poster and title.
 * @param item - movie object
 * @param index - index of movie
 * @param scrollX - scroll position
 * @param last_index - index of last movie object (used to determine margins)
 */
const CarouselCard = ({ item, index, scrollX, last_index, navigation }) => {
    const inputRange = [
        (index - 1) * ITEM_WIDTH,
        index * ITEM_WIDTH,
        (index + 1) * ITEM_WIDTH,
    ];

    const translation = scrollX.interpolate({
        inputRange,
        outputRange: [0.85, 1, 0.85],
    });

    const setOpacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.5, 1, 0.5],
    });

    // use placeholder image if poster_path from API is null
    const poster_src = item.poster_path
        ? {
              uri: `${Constants.POSTER_BASE_PATH}/original/${item.backdrop_path}`,
          }
        : require('../assets/images/poster-placeholder.png');

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('MovieDetailPage', {
                    item: item,
                })
            }>
            <Animated.View
                style={{
                    // inline styline required to use variables
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    marginLeft: index === 0 ? OFFSET : 0,
                    marginRight: index === last_index ? OFFSET : 0,
                    opacity: setOpacity,
                    transform: [{ scale: translation }],
                }}>
                <ImageBackground
                    source={poster_src}
                    style={styles.imgBgStyle}
                    imageStyle={{ borderRadius: 6 }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
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
        width: ITEM_WIDTH,
        height: 40,
        backgroundColor: 'rgba(51, 24, 50, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: Constants.SECONDARY_COL,
        fontSize: 16,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    },
});

export default CarouselCard;
