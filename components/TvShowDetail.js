import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Constants from '../constants/constants';

const TVshowDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.title}>Show Title</Text>
                <Text style={styles.release}>Release date: 2020-01-01</Text>
                <Text style={styles.overview}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 5,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    },
    release: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        fontFamily: Constants.POPPINS_ITALIC_FONT,
    },
    overview: {
        fontSize: 16,
        margin: 5,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
    },
});

export default TVshowDetails;
