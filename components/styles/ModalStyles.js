import { StyleSheet } from 'react-native';

import Constants from '../../constants/constants';

const modalStyles = StyleSheet.create({
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

export default modalStyles;
