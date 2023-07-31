import { StyleSheet } from 'react-native';
import Constants from '../../../constants/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    numRecords: {
        fontSize: 16,
        marginVertical: 10,
        alignSelf: 'center',
        color: Constants.PRIMARY_COL,
        fontFamily: Constants.POPPINS_ITALIC_FONT,
    },
    emptyListMsg: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#5b5a5a',
        marginVertical: '30%',
        fontFamily: Constants.POPPINS_REGULAR_FONT,
    },
    cardContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: Constants.SECONDARY_COL,
        borderRadius: 10,
        padding: 8,
        elevation: 3, // this adds a drop shadow to the card
    },
    removeItemContainer: {
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: '#0f0f0f',
        borderRadius: 5,
        padding: 3,
        left: 0,
        top: 0,
        zIndex: 1, // make button appear on top of image
    },
    removeItemButton: {
        color: '#fa7257',
        borderRadius: 5,
    },
    poster: {
        height: 150,
        borderRadius: 10,
    },
    movieTitle: {
        fontSize: 18,
        marginTop: 10,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    },
    rating: {
        fontSize: 14,
        color: Constants.PRIMARY_COL,
        flexDirection: 'row',
        fontFamily: Constants.POPPINS_REGULAR_FONT,
    },
    starIcon: {
        color: '#ff9900',
        marginRight: 5,
    },
});

export default styles;
