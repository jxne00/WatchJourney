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
    backgroundColor: '#afafaf',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    width: '40%',
  },
  notChosenBtn: {
    backgroundColor: Constants.SECONDARY_COL,
    borderColor: '#4e4c4c',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    width: '40%',
  },
  buttonText: {
    color: '#000',
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
