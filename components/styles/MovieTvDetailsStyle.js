import { StyleSheet, Dimensions } from 'react-native';
import Constants from '../../constants/constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.SECONDARY_COL,
    },
    title: {
        fontSize: 22,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        marginLeft: 5,
        marginBottom: 5,
        alignSelf: 'center',
        flexWrap: 'wrap',
    },
    release: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_ITALIC_FONT,
        color: '#565656',
        alignSelf: 'center',
    },
    ratingContainer: {
        backgroundColor: Constants.SECONDARY_COL,
        borderRadius: 10,
        padding: 5,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    rating: {
        fontSize: 18,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        color: Constants.PRIMARY_COL,
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        marginHorizontal: 10,
        color: Constants.PRIMARY_COL,
    },
    overview: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    horizontalLine: {
        borderBottomColor: '#919191',
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 15,
    },
    ImageBg: {
        width: windowWidth,
        height: windowHeight * 0.44,
        resizeMode: 'cover',
        justifyContent: 'center',
        marginBottom: 10,
    },
    darkOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5,
        justifyContent: 'center',
        marginVertical: 10,
    },
    genre: {
        fontSize: 16,
        borderRadius: 8,
        padding: 5,
        backgroundColor: Constants.SECONDARY_COL,
        borderWidth: 1,
        borderColor: Constants.PRIMARY_COL,
        margin: 5,
    },
    genreText: {
        paddingHorizontal: 5,
        fontSize: 16,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        color: '#000',
    },
    castContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    cast: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        color: '#565656',
        marginRight: 5,
    },
});

export default styles;
