import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { ThemeContext } from '../../data/ThemeContext';
import DiscoverStyles from './DiscoverStyles';
import ShowsList from '../../components/ShowsList';

/**
 * @description The discover screen displays a list of movies and tv shows.
 */
function DiscoverScreen({ navigation }) {
  const styles = DiscoverStyles();
  const { theme } = useContext(ThemeContext);
  // show movies by default
  const [type, setType] = useState('movie');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        <View style={styles.chosenBtnCont}>
          {/* button to display movie list */}
          <TouchableOpacity
            style={
              // set a different style for chosen button
              type === 'movie' ? styles.chosenBtn : styles.notChosenBtn
            }
            onPress={() => setType('movie')}>
            <Text
              style={type === 'movie' ? styles.chosenBtnText : styles.btnText}>
              Movies
            </Text>
          </TouchableOpacity>

          {/* button to display TV show list */}
          <TouchableOpacity
            style={
              // set a different style for pressed/unpressed button
              type == 'tv' ? styles.chosenBtn : styles.notChosenBtn
            }
            onPress={() => setType('tv')}>
            <Text style={type === 'tv' ? styles.chosenBtnText : styles.btnText}>
              TV Shows
            </Text>
          </TouchableOpacity>
        </View>

        {/* display a list of movies or tvshows according to button pressed */}
        <ShowsList navigation={navigation} type={type} />
      </View>
    </SafeAreaView>
  );
}

export default DiscoverScreen;
