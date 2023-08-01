import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    ScrollView,
    Animated,
} from 'react-native';

// import stylesheets
import styles from './HomeStyles';
import globalStyles from '../../constants/GlobalStyles';

import Constants from '../../constants/constants';
import GradientText from '../../components/GradientText';
import { Fetch_API_Data } from '../../data/api';
import CarouselCard from '../../components/CarouselCard';

const OFFSET = 40;
const windowWidth = Dimensions.get('window').width;
const ITEM_WIDTH = windowWidth - OFFSET * 2;
const ITEM_HEIGHT = 200;

const HomeScreen = ({ navigation }) => {
    // state for movies showing in theaters now
    const [nowShowing, setNowShowing] = React.useState([]);

    const scrollX = React.useRef(new Animated.Value(0)).current;

    // fetch movies showing in theaters now
    useEffect(() => {
        // docs: https://developer.themoviedb.org/reference/movie-now-playing-list
        Fetch_API_Data('/movie/now_playing').then((json) =>
            setNowShowing(json.results),
        );
    }, []);

    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <View style={styles.container}>
                <StatusBar style="auto" />

                {/* App Name */}
                <GradientText
                    style={styles.appname}
                    colors={['#688CB6', '#42648A', '#283C53']}>
                    WatchJourney{' '}
                </GradientText>

                <Text style={styles.sectionTitle}>In Theaters Now!</Text>

                {/* horizontal scrollview */}
                <ScrollView
                    horizontal={true}
                    decelerationRate={'normal'}
                    snapToInterval={ITEM_WIDTH}
                    style={styles.scrollviewStyle}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    disableIntervalMomentum
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false },
                    )}
                    scrollEventThrottle={12}>
                    {/* render custom carousel cards */}
                    {nowShowing.map((item, index) => (
                        <CarouselCard
                            key={item.id}
                            item={item}
                            navigation={navigation}
                            index={index}
                            scrollX={scrollX}
                            last_index={nowShowing.length - 1}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
