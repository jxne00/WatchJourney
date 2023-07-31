import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
} from 'react-native';

import Constants from '../constants/constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function TVshowDetails({ route }) {
    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                {/* Set image poster image as background */}
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
                </ImageBackground>
                {/* details of the show */}
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.release}>({item.first_air_date})</Text>
                </View>
                <Text style={styles.overview}>{item.overview}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        marginLeft: 5,
    },
    release: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        color: '#606060',
        marginLeft: 5,
    },
    overview: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        margin: 5,
    },
    ImageBg: {
        width: windowWidth,
        height: windowHeight * 0.44,
        resizeMode: 'cover',
        justifyContent: 'center',
        marginBottom: 10,
    },
    darkOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    posterImage: {
        resizeMode: 'contain',
        width: windowWidth * 0.95,
        height: windowHeight * 0.42,
        borderRadius: windowHeight * 0.04,
        alignSelf: 'center',
    },
});

export default TVshowDetails;
