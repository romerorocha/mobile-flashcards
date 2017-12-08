import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Avatar } from 'react-native-elements';
import { darkBlue, lightBlue } from '../../utils/colors';

const QuizResults = ({ score, questionsCount, reset, goBack }) => {
  const testPassed = score / questionsCount > 0.5;
  const greetings = testPassed ? 'Congrats!' : 'Oh man...';
  const chuck = require('../../img/chuck.jpg');
  const facepalm = require('../../img/facepalm.jpg');

  return (
    <View style={{ flex: 1, justifyContent: 'space-around' }}>
      <View style={styles.header}>
        <Avatar xlarge rounded source={testPassed ? chuck : facepalm} />
        <Text h4 style={styles.text}>
          {greetings}
        </Text>
        <Text style={styles.text}>
          You've answered {score} of {questionsCount} question(s) correctly.
        </Text>
      </View>
      <View>
        <Button
          backgroundColor={lightBlue}
          title="Restart Quiz"
          onPress={reset}
        />
        <Button
          backgroundColor={darkBlue}
          buttonStyle={styles.button}
          title="Back to Deck"
          onPress={goBack}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  text: {
    color: darkBlue,
    marginTop: 10,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 5
  }
});

export default QuizResults;
