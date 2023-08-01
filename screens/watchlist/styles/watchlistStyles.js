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
    // ------- styles for flatlist items ------- //
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
    // ------- styles for view choosing button ------- //
    flatlistTitle: {
        fontSize: 20,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        alignSelf: 'center',
        marginVertical: 5,
    },
    chosenBtnCont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    chosenBtn: {
        backgroundColor: Constants.PRIMARY_COL,
        opacity: 0.6,
        borderRadius: 10,
        padding: 10,
        marginVertical: 3,
        alignSelf: 'center',
        width: '40%',
    },
    notChosenBtn: {
        backgroundColor: Constants.PRIMARY_COL,
        borderRadius: 10,
        padding: 10,
        marginVertical: 3,
        alignSelf: 'center',
        width: '40%',
    },
    buttonText: {
        color: Constants.SECONDARY_COL,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default styles;
