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
import { SegmentedButtons, Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
// import API fetch functions
import { Fetch_API_Data, fetch_API_with_param } from '../../data/API/api';
// import stylesheet and custom components
import styles from './HomeStyles';
import GradientText from '../../components/GradientText';
import CarouselCard from './components/CarouselCard';

const HomeScreen = ({ navigation }) => {
    // state for movies showing in theaters now
    const [nowShowing, setNowShowing] = React.useState([]);
    // state to store search query and results
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    // state to filter between movie and tv show search
    const [searchType, setSearchType] = React.useState('movie');

    const OFFSET = 40;
    const windowWidth = Dimensions.get('window').width;
    const ITEM_WIDTH = windowWidth - OFFSET * 2;

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
     * @description fetch either movie or tv show search results
     * @see https://developer.themoviedb.org/reference/search-movie (movie)
     * @see https://developer.themoviedb.org/reference/search-tv (tv)
     */
    const getSearchResults = () => {
        fetch_API_with_param(`/search/${searchType}?query=${searchQuery}`).then(
            (json) => setSearchResults(json.results),
        );
    };

    // navigate to either movie or tv show details page
    const handleNavigation = (item) => {
        if (item.title) {
            // navigate to movie details page
            navigation.navigate('MovieDetailPage', { item });
        } else {
            // navigate to tv show details page
            navigation.navigate('TVshowDetailPage', { item });
        }
    };

    // clears the search query and results
    const resetSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
    };

    /**
     * @description function to render search results
     */
    const renderSearchResults = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            style={styles.searchResult}
            onPress={() => handleNavigation(item)}>
            {/* "item.title" for movies, "item.name" for tvshows */}
            <Text style={styles.title}>{item.title || item.name}</Text>

            <View style={styles.releaseRating}>
                <Text style={styles.releaseDate}>
                    {/* "item.release_date" for movies, "item.first_air_date" for tvshows */}
                    ({item.release_date || item.first_air_date}) &#x2022;
                </Text>

                {/* display rating */}
                <View style={styles.ratingContainer}>
                    <MaterialIcons name="star" style={styles.ratingIcon} />
                    <Text style={styles.ratingNumber}>{item.vote_average}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="dark" />

                {/* App Name */}
                <GradientText
                    style={styles.appname}
                    colors={['#688CB6', '#42648A', '#283C53']}>
                    WatchJourney{' '}
                </GradientText>
                <Divider />

                {/* ========= carousel cards ========= */}
                <View>
                    <View style={styles.sectionContainer}>
                        <MaterialIcons name="movie" size={24} />
                        <Text style={styles.sectionTitle}>
                            {' '}
                            In Theatres Now
                        </Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        decelerationRate={'normal'}
                        snapToInterval={ITEM_WIDTH}
                        style={styles.scrollviewStyle}
                        showsHorizontalScrollIndicator={false}
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

                <View style={styles.horizontalLine}></View>

                {/* =========== Search section =========== */}
                {/* buttons for indicating "tv show" or "movie" search */}
                <SegmentedButtons
                    value={searchType}
                    onValueChange={(newValue) => {
                        setSearchType(newValue);
                        resetSearch();
                    }}
                    buttons={[
                        { label: 'Movies', value: 'movie' },
                        { label: 'TV Shows', value: 'tv' },
                    ]}
                    style={styles.segBtnStyle}
                />

                {/* search box */}
                <View style={styles.searchBoxContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={
                            searchType === 'movie'
                                ? 'Search for a movie'
                                : 'Search for a TV show'
                        }
                        onChangeText={(text) => setSearchQuery(text)}
                        value={searchQuery}
                        // no auto complete
                        autoCompleteType={'off'}
                        textContentType={'none'}
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
