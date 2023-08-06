import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Constants.SECONDARY_COL,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Constants.SECONDARY_COL,
    paddingBottom: 50,
  },
  chosenBtnCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
  chosenBtn: {
    backgroundColor: '#000000',
    opacity: 0.6,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    width: '40%',
  },
  notChosenBtn: {
    backgroundColor: '#000',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    width: '40%',
  },
  btnText: {
    color: '#ffffff',
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    fontSize: 16,
    textAlign: 'center',
  },
  chosenBtnText: {
    color: '#ffffff',
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
