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
  // --------------- modal styles ---------------
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    backgroundColor: Constants.SECONDARY_COL,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: '80%',
    height: '40%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: Constants.PRIMARY_COL,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    fontSize: 20,
  },
  modalBtnStyle: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '80%',
    backgroundColor: Constants.PRIMARY_COL,
    color: Constants.SECONDARY_COL,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    fontSize: 16,
  },
  modelBtnText: {
    color: Constants.SECONDARY_COL,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    fontSize: 16,
    textAlign: 'center',
  },
  modalCancelIcon: {
    marginTop: 16,
    padding: 10,
    color: '#a10101',
  },
});

export default styles;
