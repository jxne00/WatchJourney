import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.SECONDARY_COL,
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
});

export default styles;
