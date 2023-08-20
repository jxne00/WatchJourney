import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const ModalStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalView: {
      backgroundColor: SECONDARY_COL,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      width: '80%',
    },
    modalTitle: {
      marginBottom: 10,
      textAlign: 'center',
      color: theme === 'light' ? '#000000' : '#ffffff',
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      fontSize: 20,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: theme === 'light' ? PRIMARY_COL : '#cb99dc',
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
};

export default ModalStyles;
