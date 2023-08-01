import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.SECONDARY_COL,
        paddingBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        color: '#000',
        marginVertical: 5,
        marginLeft: 20,
    },
    appname: {
        fontSize: 36,
        fontFamily: Constants.BANGER_FONT,
        margin: 20,
        letterSpacing: 2,
    },
    scrollviewStyle: {
        backgroundColor: '#ced0ce',
        paddingHorizontal: 0,
        paddingVertical: 10,
    },
    // ------ search section ------
    searchBoxContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        color: '#000',
        paddingHorizontal: 10,
    },
    searchIcon: {
        fontSize: 20,
        color: '#000',
    },
    searchResultsContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    searchScrollStyle: {
        maxHeight: 200,
    },
    // ------ radio buttons ------
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    buttonGrp: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },
    radioBtnTxt: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        color: '#000',
    },
    // ------ search results ------
    searchResult: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        color: '#000',
        paddingVertical: 5,
    },
    releaseDate: {
        fontSize: 14,
        fontFamily: Constants.POPPINS_ITALIC_FONT,
        color: '#303030',
        paddingVertical: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingIcon: {
        fontSize: 14,
        color: '#d88928',
        marginRight: 5,
    },
    ratingNumber: {
        fontSize: 14,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        color: '#000000',
        paddingVertical: 5,
    },
});

export default styles;
