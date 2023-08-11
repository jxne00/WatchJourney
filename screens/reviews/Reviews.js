import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Fetch_API_Data } from '../../data/API';
import styles from './ReviewsStyles';

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

  // set expand or collapse review content
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
                // expand or collapse on press
                onPress={() => toggleExpanded(review.id)}>
                <View key={review.id} style={styles.reviewContainer}>
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
                      <FontAwesome name="user-circle" size={30} />
                    )}

                    {/* review author's name & username */}
                    <View>
                      <Text style={styles.author}>
                        {
                          authorData.name ? authorData.name : '-' // show '-' if name is null
                        }
                      </Text>

                      <Text style={styles.username}>
                        @{authorData.username}
                      </Text>
                    </View>

                    {/* rating */}
                    <View style={styles.ratingContainer}>
                      <FontAwesome name="star" size={20} color={'#da9132'} />
                      <Text style={styles.ratingText}>{authorData.rating}</Text>
                    </View>
                  </View>

                  {/* review content */}
                  <Text style={styles.content}>
                    {review.isExpanded
                      ? review.content
                      : `${review.content.substring(0, 200)}...`}
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

export default Reviews;
