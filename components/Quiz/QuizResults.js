import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { purple, lightPurp } from '../../utils/colors';
import ResultImage from './ResultImage';

const QuizResults = ({ score, questionsCount, reset }) => {
  const testPassed = score / questionsCount > 0.5;
  const greetings = testPassed ? 'Congrats!' : 'Oh man...';

  return (
    <View style={{ flex: 1, justifyContent: 'space-around' }}>
      <View style={styles.header}>
        <ResultImage passed={testPassed} />
        <Text h4 style={styles.text}>
          {greetings}
        </Text>
        <Text style={styles.text}>
          You've answered {score} of {questionsCount} question(s) correctly.
        </Text>
      </View>
      <View>
        <Button
          backgroundColor={lightPurp}
          title="Restart Quiz"
          onPress={reset}
        />
        <Button
          backgroundColor={purple}
          buttonStyle={styles.button}
          title="Back to Deck"
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
    color: purple,
    marginTop: 10,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 5
  }
});

export default QuizResults;
