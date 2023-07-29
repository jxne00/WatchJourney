import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

import Constants from '../../../constants/constants';

const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.sectionHeaderIndicator}></View>
    </View>
);

/**
 * @description display movies in cards
 */
const MovieCardView = ({ data, navigation }) => {
    const CardCell = ({ item }) => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('MovieDetailPage', { item: item })
            }
            style={styles.cardContainer}>
            <Image
                source={{
                    uri: `${Constants.POSTER_BASE_PATH}/original/${item.poster_path}`,
                }}
            />
            <View style={styles.cardRow}>
                <Text style={styles.cardName}>{item.title}</Text>
                <Text style={styles.cardPrice}>{item.vote_average}</Text>
            </View>
            <Text style={styles.cardCountry}>{item.release_date}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <SectionHeader title="Popular Movies" />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.productScroll}>
                {data.results.map((item) => (
                    <CardCell item={item} key={item.id} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 200,
        height: 300,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    cardName: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 15,
        color: Constants.PRIMARY_COL,
    },
    cardPrice: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 15,
        color: Constants.PRIMARY_COL,
    },
    cardCountry: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 13,
        color: Constants.PRIMARY_COL,
        paddingHorizontal: 10,
    },
    productScroll: {
        marginVertical: 10,
    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
        marginTop: -80,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#585a61',
        width: '50%',
    },
    sectionHeaderIndicator: {
        height: 4,
        backgroundColor: '#b1e5d3',
        width: 115,
        marginTop: -5,
    },
});

export default MovieCardView;
