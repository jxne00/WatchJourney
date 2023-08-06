import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

/**
 * @description component text with gradient colors
 */
const GradientText = (props) => {
  // default values to use if none passed in
  const defaultColors = ['#ffffff', '#868686', '#000000'];
  const colors = props.colors || defaultColors;
  const start = props.start || { x: 0, y: 0 };
  const end = props.end || { x: 1, y: 0 };

  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={colors} start={start} end={end}>
        <Text {...props} style={[props.style, styles.text]} />
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    opacity: 0,
  },
});

export default GradientText;
