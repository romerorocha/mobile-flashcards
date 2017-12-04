import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import { lightPurp, purple, blue } from '../../utils/colors';

class Quiz extends Component {
  state = {
    currentIndex: 0,
    score: 0,
    showAnswer: false
  };

  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  render() {
    const { questions } = this.props.navigation.state.params.deck;
    const { currentIndex, score, showAnswer } = this.state;

    const currentQuestion = questions[currentIndex];

    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View>
          {showAnswer ? (
            <Card title={`Answer`}>
              <View style={styles.question}>
                <Text>{currentQuestion.answer}</Text>
                <TouchableOpacity
                  style={{ marginTop: 20 }}
                  onPress={this.toggleAnswer}
                >
                  <Text style={styles.showButton}>Show Question</Text>
                </TouchableOpacity>
              </View>
            </Card>
          ) : (
            <Card title={`Question ${currentIndex + 1} of ${questions.length}`}>
              <View style={styles.question}>
                <Text>{currentQuestion.question}</Text>
                <TouchableOpacity
                  style={{ marginTop: 20 }}
                  onPress={this.toggleAnswer}
                >
                  <Text style={styles.showButton}>Show Answer</Text>
                </TouchableOpacity>
              </View>
            </Card>
          )}
        </View>
        <View>
          <Button
            title="I'm a genius"
            backgroundColor={purple}
            icon={{ name: 'thumbs-up', type: 'feather' }}
          />
          <Button
            title="I'm a dumbass"
            backgroundColor={lightPurp}
            buttonStyle={{ marginTop: 5 }}
            icon={{ name: 'thumbs-down', type: 'feather' }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20
  },
  question: {
    alignItems: 'center'
  },
  showButton: {
    color: blue
  }
});

export default Quiz;
