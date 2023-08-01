import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Constants.SECONDARY_COL,
        paddingBottom: 50,
    },
    chosenBtnCont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    chosenBtn: {
        backgroundColor: Constants.PRIMARY_COL,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        alignSelf: 'center',
        width: '40%',
    },
    buttonText: {
        color: Constants.SECONDARY_COL,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 16,
        textAlign: 'center',
    },
    header: {
        fontSize: 24,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    },
});

export default styles;
