import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    ScrollView,
    Animated,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

// import stylesheets
import styles from './HomeStyles';
import globalStyles from '../../constants/GlobalStyles';

import Constants from '../../constants/constants';
import GradientText from '../../components/GradientText';
import { Fetch_API_Data, fetch_API_with_param } from '../../data/api';
import CarouselCard from '../../components/CarouselCard';

const OFFSET = 40;
const windowWidth = Dimensions.get('window').width;
const ITEM_WIDTH = windowWidth - OFFSET * 2;
const ITEM_HEIGHT = 200;

const HomeScreen = ({ navigation }) => {
    // state for movies showing in theaters now
    const [nowShowing, setNowShowing] = React.useState([]);
    // state to store search query
    const [searchQuery, setSearchQuery] = React.useState('');
    // state to store movie search results
    const [searchResults, setSearchResults] = React.useState([]);
    // state to filter between movie and tv show search
    const [searchType, setSearchType] = React.useState('movie');

    // value to track scroll position of carousel cards
    const scrollX = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // fetch movies showing in theaters now
        // docs: https://developer.themoviedb.org/reference/movie-now-playing-list
        Fetch_API_Data('/movie/now_playing').then((json) =>
            setNowShowing(json.results),
        );
    }, []);

    /**
     * @description function to fetch either movie or tv show search results
     * @see https://developer.themoviedb.org/reference/search-movie (movie)
     * @see https://developer.themoviedb.org/reference/search-tv (tv)
     */
    const getSearchResults = () => {
        fetch_API_with_param(`/search/${searchType}?query=${searchQuery}`).then(
            (json) => setSearchResults(json.results),
        );
    };

    /**
     * @description function to navigate to either movie or tv show details page
     * based on item type
     */
    const handleNavigation = (item) => {
        if (item.title) {
            // navigate to movie details page
            navigation.navigate('MovieDetailPage', { item });
        } else {
            // navigate to tv show details page
            navigation.navigate('TVshowDetailPage', { item });
        }
    };

    /**
     * @description function to render search results
     */
    const renderSearchResults = ({ item }) => (
        <TouchableOpacity key={item.id} onPress={() => handleNavigation(item)}>
            {/* "item.title" for movies, "item.name" for tvshows */}
            <Text style={styles.searchResult}>{item.title || item.name}</Text>
            <Text style={styles.releaseDate}>
                {/* "item.release_date" for movies, "item.first_air_date" for tvshows */}
                ({item.release_date || item.first_air_date})
            </Text>

            <View style={styles.ratingContainer}>
                <MaterialIcons name="star" style={styles.ratingIcon} />
                <Text style={styles.ratingNumber}>{item.vote_average}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="light" />

                {/* App Name */}
                <GradientText
                    style={styles.appname}
                    colors={['#688CB6', '#42648A', '#283C53']}>
                    WatchJourney{' '}
                </GradientText>

                <View>
                    <Text style={styles.sectionTitle}>In Theaters Now!</Text>
                    {/* ========= carousel cards ========= */}
                    <ScrollView
                        horizontal={true}
                        decelerationRate={'normal'}
                        snapToInterval={ITEM_WIDTH}
                        style={styles.scrollviewStyle}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        disableIntervalMomentum
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: { x: scrollX },
                                    },
                                },
                            ],
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

                {/* =========== Search section =========== */}

                {/* radio buttons to select movie or tv show search */}
                <View style={styles.radioGroup}>
                    <RadioButton.Group
                        onValueChange={(newValue) => setSearchType(newValue)}
                        value={searchType}>
                        <View style={styles.buttonGrp}>
                            <Text style={styles.radioBtnTxt}>Movies</Text>
                            <RadioButton value="movie" />
                        </View>
                        <View style={styles.buttonGrp}>
                            <Text style={styles.radioBtnTxt}>TV Shows</Text>
                            <RadioButton value="tv" />
                        </View>
                    </RadioButton.Group>
                </View>
                {/* search box */}
                <View style={styles.searchBoxContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for a movie or TV show"
                        onChangeText={(text) => setSearchQuery(text)}
                        value={searchQuery}
                    />
                    <TouchableOpacity onPress={getSearchResults}>
                        <MaterialIcons
                            name="search"
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>
                </View>

                {/* display search results */}
                {searchResults.length > 0 && (
                    <View style={styles.searchResultsContainer}>
                        <FlatList
                            data={searchResults}
                            keyExtractor={(item) => item.id.toString()}
                            style={styles.searchScrollStyle}
                            renderItem={renderSearchResults}
                        />
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
