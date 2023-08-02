import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Fetch_API_Data } from '../../data/API/api';
import Constants from '../../constants/constants';

const Reviews = ({ route }) => {
    const { id, name, type } = route.params;
    const [reviews, setReviews] = useState([]);

    // fetch reviews of movie or tv show
    // movies: https://developer.themoviedb.org/reference/movie-reviews
    // tv show: https://developer.themoviedb.org/reference/tv-series-reviews
    useEffect(() => {
        Fetch_API_Data(`/${type}/${id}/reviews`).then((response) =>
            setReviews(response.results),
        );
    }, []);

    const toggleExpanded = (id) => {
        setReviews(
            reviews.map((review) =>
                review.id === id
                    ? { ...review, isExpanded: !review.isExpanded }
                    : review,
            ),
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="light" />
            <ScrollView>
                <Text style={styles.title}>Reviews: {name}</Text>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => {
                        authorData = review.author_details;
                        let avatarPath = authorData.avatar_path;

                        // remove leading '/' from avatar path
                        if (avatarPath && avatarPath.startsWith('/')) {
                            avatarPath = avatarPath.substring(1);
                        }

                        return (
                            <TouchableOpacity
                                key={review.id}
                                onPress={() => toggleExpanded(review.id)}>
                                <View
                                    key={review.id}
                                    style={styles.reviewContainer}>
                                    <View style={styles.authorContainer}>
                                        {/* display FontAwesome icon if avatar is null */}
                                        {avatarPath ? (
                                            <Image
                                                source={{
                                                    uri: avatarPath,
                                                }}
                                                style={styles.avatarImage}
                                            />
                                        ) : (
                                            <FontAwesome
                                                name="user-circle"
                                                size={30}
                                            />
                                        )}
                                        <View>
                                            {/* review author's name */}
                                            <Text style={styles.author}>
                                                {
                                                    authorData.name
                                                        ? authorData.name
                                                        : '-' // show '-' if name is null
                                                }
                                            </Text>

                                            {/* review author's username */}
                                            <Text style={styles.username}>
                                                @{authorData.username}
                                            </Text>
                                        </View>

                                        {/* rating */}
                                        <View style={styles.ratingContainer}>
                                            <FontAwesome
                                                name="star"
                                                size={20}
                                                color={'#da9132'}
                                            />
                                            <Text style={styles.ratingText}>
                                                {authorData.rating}
                                            </Text>
                                        </View>
                                    </View>

                                    {/* review content */}
                                    <Text style={styles.content}>
                                        {review.isExpanded
                                            ? review.content
                                            : `${review.content.substring(
                                                  0,
                                                  200,
                                              )}...`}
                                    </Text>

                                    {/* show a divider between reviews */}
                                    {index !== reviews.length - 1 && (
                                        <View style={styles.horizontalLine} />
                                    )}
                                </View>
                            </TouchableOpacity>
                        );
                    })
                ) : (
                    // show message if no reviews available
                    <Text style={styles.noReviews}>No reviews available</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Constants.SECONDARY_COL,
    },
    title: {
        fontSize: 24,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        marginVertical: 10,
        marginLeft: 10,
    },
    reviewContainer: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000000',
    },
    author: {
        fontSize: 20,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        marginLeft: 10,
    },
    username: {
        fontSize: 16,
        fontFamily: Constants.POPPINS_ITALIC_FONT,
        marginLeft: 10,
        marginTop: -2,
        color: '#575757',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        paddingRight: 10,
    },
    ratingText: {
        fontSize: 18,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        marginLeft: 5,
    },
    content: {
        fontSize: 16,
        marginVertical: 5,
        fontFamily: Constants.POPPINS_REGULAR_FONT,
    },
    horizontalLine: {
        borderBottomColor: '#474747',
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    noReviews: {
        fontSize: 16,
        fontStyle: 'italic',
    },
});

export default Reviews;
