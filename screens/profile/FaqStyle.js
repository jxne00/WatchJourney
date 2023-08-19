import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Constants.SECONDARY_COL,
  },
  title: {
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    color: Constants.PRIMARY_COL,
    fontSize: 22,
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
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: -3, height: 3 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
    elevation: 5,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    marginHorizontal: 10,
    color: '#000',
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    fontSize: 20,
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
