import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.SECONDARY_COL,
    paddingBottom: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: 5,
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    color: '#000',
  },
  appname: {
    fontSize: 30,
    fontFamily: Constants.BANGER_FONT,
    color: Constants.PRIMARY_COL,
    marginVertical: '5%',
    textAlign: 'center',
    letterSpacing: 2,
  },
  scrollviewStyle: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },

  // ------ search box ------
  searchBoxContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 50,
    marginHorizontal: 15,
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    color: '#000',
    paddingHorizontal: 10,
  },
  searchIcon: {
    fontSize: 30,
    color: '#000',
  },
  clearIcon: {
    fontSize: 20,
    color: '#232323',
  },
});

export default styles;
