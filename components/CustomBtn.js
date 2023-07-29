import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Constants from '../constants/constants';

// renders a custom button
const CustomBtn = (props) => {
    // set default values to use if none passed in
    alignButton = props.align || 'center';
    colors = props.colors || ['#fff', '#868686', '#000'];
    start = props.start || { x: 0, y: 0 };
    end = props.end || { x: 1, y: 0 };
    // scale button width based on text length
    containerWidth = props.text.length * 20;

    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    alignSelf: alignButton,
                    borderColor: props.borderCol,
                    width: containerWidth,
                },
            ]}
            onPress={props.onPress}>
            <LinearGradient
                colors={colors}
                start={start}
                end={end}
                style={styles.LnrGradient}>
                <Text style={[styles.text, { color: props.textColor }]}>
                    {props.text}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 15,
    },
    LnrGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    text: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 16,
        color: Constants.SECONDARY_COL,
    },
});

export default CustomBtn;
