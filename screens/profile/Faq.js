import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles/FaqStyle';

const questions = [
    {
        question: 'Q1. What is this app about?',
        answer: 'WatchJourney is an app that can help you keep track of all your entertainment watch progress. \n\nBy adding movies and TV shows into different lists, you can easily keep track of what you have watched, what you are currently watching, and what you intend to watch.',
    },
    {
        question: 'Q2. Where is the data from?',
        answer: 'The data of all movies and TV shows displayed in this app are fetched from the API of The Movie Database (TMDb).',
    },
];

const FaqScreen = () => {
    // remember if a question has been uncollapsed
    const [activeQuestions, setActiveQuestions] = useState([]);

    // set state for active questions
    const handlePress = (index) => {
        activeQuestions.includes(index)
            ? setActiveQuestions(
                  activeQuestions.filter((item) => item !== index),
              )
            : setActiveQuestions([...activeQuestions, index]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            <Text style={styles.title}>Frequently Asked Questions</Text>

            <View style={styles.horizontalLine} />

            <View style={styles.container}>
                {questions.map((faq, index) => (
                    <View style={styles.contentContainer} key={index}>
                        <TouchableOpacity
                            onPress={() => handlePress(index)}
                            style={styles.touchable}>
                            <Text style={styles.question}>{faq.question}</Text>
                            <MaterialIcons
                                name={
                                    activeQuestions.includes(index)
                                        ? 'keyboard-arrow-up'
                                        : 'keyboard-arrow-down'
                                }
                                size={24}
                                color="#000"
                            />
                        </TouchableOpacity>

                        {/* display answer only if uncollapsed */}
                        {activeQuestions.includes(index) && (
                            <Text style={styles.answer}>{faq.answer}</Text>
                        )}
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default FaqScreen;
