import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './DiscoverStyles';
import ShowsList from '../../components/ShowsList';

/**
 * @description The discover screen displays a list of movies and tv shows.
 */
function DiscoverScreen({ navigation }) {
  // show movies by default
  const [type, setType] = useState('movie');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.chosenBtnCont}>
          {/* button to display movie list */}
          <TouchableOpacity
            style={
              // set a different style for chosen button
              type === 'movie' ? styles.chosenBtn : styles.notChosenBtn
            }
            onPress={() => setType('movie')}>
            <Text style={styles.chosenBtnText}>Movies</Text>
          </TouchableOpacity>

          {/* button to display TV show list */}
          <TouchableOpacity
            style={
              // set a different style for pressed/unpressed button
              type == 'tv' ? styles.chosenBtn : styles.notChosenBtn
            }
            onPress={() => setType('tv')}>
            <Text style={styles.btnText}>TV Shows</Text>
          </TouchableOpacity>
        </View>

        {/* display a list of movies or tvshows according to button pressed */}
        <ShowsList navigation={navigation} type={type} />
      </View>
    </SafeAreaView>
  );
}

export default DiscoverScreen;
