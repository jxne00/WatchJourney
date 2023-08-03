import { StyleSheet } from 'react-native';
import Constants from '../../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    fontSize: 22,
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  horizontalLine: {
    borderBottomColor: '#696969',
    borderBottomWidth: 1,
    marginTop: 5,
    width: '60%',
    alignSelf: 'center',
  },
  contentContainer: {
    marginVertical: 10,
    marginTop: '10%',
    backgroundColor: '#e0dfdf',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: -3, height: 3 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    marginHorizontal: 10,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    fontSize: 20,
    color: Constants.PRIMARY_COL,
  },
  answer: {
    marginTop: 5,
    color: '#444343',
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    paddingHorizontal: 5,
    fontSize: 16,
  },
});

export default styles;
