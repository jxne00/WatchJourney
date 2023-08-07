import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    paddingBottom: 5,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: Constants.SECONDARY_COL,
  },
  showContainer: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: Constants.SECONDARY_COL,
    borderWidth: 1,
    borderColor: Constants.PRIMARY_COL,
    borderRadius: 10,
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 10,
  },
  posterContainer: {
    borderRightColor: Constants.PRIMARY_COL,
    borderRightWidth: 1,
    marginRight: 6,
  },
  posterImage: {
    resizeMode: 'cover',
    width: 70,
    height: 85,
    borderRadius: 6,
    marginRight: 6,
  },
  showDetails: {
    flex: 1,
  },
  showTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  showOverview: {
    fontSize: 14,
    lineHeight: 16,
    color: '#727272',
  },
  readMore: {
    color: '#0480a2',
    fontFamily: Constants.POPPINS_ITALIC_FONT,
    fontStyle: 'italic',
    alignSelf: 'flex-end',
    fontSize: 12,
  },

  // --------------- footer styles ---------------
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  pageNum: {
    color: '#000',
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    fontSize: 15,
  },
  addToListBtn: {
    backgroundColor: Constants.PRIMARY_COL,
    borderRadius: 10,
    padding: 5,
    alignContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: -5,
    left: -5,
  },
  addToListIcon: {
    color: Constants.SECONDARY_COL,
  },
});

export default styles;
