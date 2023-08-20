import React, { useContext } from 'react';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

/**
 * @description Tab bar screen options to use for all screens
 */
const ScreenOptions = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return {
    headerShown: true,
    headerTintColor: Constants.SECONDARY_COL,
    headerStyle: {
      backgroundColor: PRIMARY_COL,
    },
    // show back button without text
    headerBackTitleVisible: false,
  };
};
export default ScreenOptions;
