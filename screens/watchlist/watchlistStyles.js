import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.SECONDARY_COL,
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

  // ------- styles for view choosing button ------- //
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  flatlistTitle: {
    marginRight: 10,
    fontSize: 20,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareIcon: {
    color: '#2e2e2e',
    paddingLeft: '3%',
  },
});

export default styles;
