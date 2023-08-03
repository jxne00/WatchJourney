import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Constants from '../constants/constants';

// renders a custom button
const CustomBtn = (props) => {
  // set default values to use if none passed in
  alignButton = props.align || 'center';
  // scale button width based on text length
  containerWidth = props.text.length * 20;
  // set default colors and width if none passed in
  textCol = props.textColor || Constants.SECONDARY_COL;
  borderCol = props.borderCol || Constants.SECONDARY_COL;
  borderWidth = props.borderCol ? 1 : 0;
  bgCol = props.bgCol || Constants.PRIMARY_COL;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          alignSelf: alignButton,
          backgroundColor: props.bgCol,
          borderWidth: props.borderWidth,
          borderColor: props.borderCol,
          width: containerWidth,
        },
      ]}
      onPress={props.onPress}>
      <Text style={[styles.text, { color: props.textColor }]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 15,
  },
  text: {
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    fontSize: 16,
    color: Constants.SECONDARY_COL,
  },
});

export default CustomBtn;
