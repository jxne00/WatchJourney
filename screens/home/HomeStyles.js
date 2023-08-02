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
        fontSize: 30,
        fontFamily: Constants.BANGER_FONT,
        marginTop: 10,
        textAlign: 'center',
        letterSpacing: 2,
    },
    scrollviewStyle: {
        paddingHorizontal: 0,
        paddingVertical: 10,
    },
    horizontalLine: {
        borderBottomColor: '#919191',
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 15,
    },

    // ------ radio buttons ------
    segBtnStyle: {
        marginHorizontal: 20,
    },
    segBtnTextStyle: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        color: '#000',
    },
    // ------ search box ------
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

    // ------ search results ------
    searchResult: {
        // flexDirection: 'row',
        alignItems: 'left',
        marginVertical: 5,
        paddingBottom: 5,
        borderBottomColor: '#ababab',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        color: '#000',
        // paddingVertical: 5,
    },
    releaseRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    releaseDate: {
        fontSize: 14,
        fontFamily: Constants.POPPINS_ITALIC_FONT,
        color: '#303030',
        marginRight: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingIcon: {
        fontSize: 14,
        color: '#d88928',
        marginRight: 2,
    },
    ratingNumber: {
        fontSize: 14,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        color: '#000000',
        paddingVertical: 5,
    },
});

export default styles;
