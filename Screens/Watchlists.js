import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

function WatchlistScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text>This is the Watchlist page</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WatchlistScreen;
