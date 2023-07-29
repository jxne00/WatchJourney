import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Constants from '../../../constants/constants';

const questions = [
    {
        question: 'Q1. What is this app used for?',
        answer: 'The purpose of this app is to help keep track of the watch progress of tv shows and movies by adding them into different lists such as "Watched", "Watching Now", "Intend to Watch", etc.',
    },
    {
        question: 'Q2. Where is the data from?',
        answer: 'All movie and tv show data used in this app is fetched from The Movie Database (TMDb) API.',
    },
    {
        question: 'Q3. ',
        answer: 'TBC',
    },
    {
        question: 'Q4.',
        answer: 'TBC',
    },
];

const FaqScreen = () => {
    // remember if a question has been uncollapsed
    const [activeQuestions, setActiveQuestions] = useState([]);

    const handlePress = (index) => {
        activeQuestions.includes(index)
            ? setActiveQuestions(
                  activeQuestions.filter((item) => item !== index),
              )
            : setActiveQuestions([...activeQuestions, index]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>Frequently Asked Questions</Text>

            <View style={styles.container}>
                {questions.map((faq, index) => (
                    <View key={index}>
                        <TouchableOpacity onPress={() => handlePress(index)}>
                            <Text style={styles.question}>{faq.question}</Text>
                        </TouchableOpacity>
                        {activeQuestions.includes(index) && (
                            <Text style={styles.answer}>{faq.answer}</Text>
                        )}
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    backBtn: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    backBtnText: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 14,
        color: '#000',
        marginLeft: 3,
        marginTop: 5,
    },
    title: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 22,
        color: '#000',
        marginTop: 20,
        alignSelf: 'center',
    },
    question: {
        marginTop: 20,
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 18,
        color: '#000',
    },
    answer: {
        marginTop: 5,
        color: '#444343',
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        paddingHorizontal: 5,
        fontSize: 16,
    },
});

export default FaqScreen;
