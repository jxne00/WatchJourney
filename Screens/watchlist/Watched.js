import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Constants from '../../constants/constants';

const Watched = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.textStyle}>
                    This is the "Watched" page. {'\n'} This page will display a
                    list of shows the user has already watched.
                </Text>
            </View>
        </SafeAreaView>
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

export default Watched;
