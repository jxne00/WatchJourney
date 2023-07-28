import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

import Constants from '../constants/constants';

// renders a custom button
const CustomBtn = ({ text, onPress, align }) => {
    // align center by default
    alignButton = align ? align : 'center';
    return (
        <Pressable
            style={[styles.button, { alignSelf: alignButton }]}
            onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '30%',
        backgroundColor: Constants.PRIMARY_COL,
        shadowColor: '#000',
        shadowOffset: {
            width: -3,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.5,
        elevation: 5,
    },
    text: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 16,
        color: Constants.SECONDARY_COL,
    },
});

export default CustomBtn;
