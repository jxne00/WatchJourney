import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

import Constants from '../../constants/constants';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.textStyle}>This is the Home page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 14,
    },
});

export default HomeScreen;
