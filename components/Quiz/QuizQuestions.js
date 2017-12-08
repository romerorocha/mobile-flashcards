import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { darkBlue, lightBlue } from '../../utils/colors';
import QuestionCard from './QuestionCard';

class QuizQuestions extends Component {
  state = {
    showAnswer: false,
    bounceValue: new Animated.Value(1)
  };

  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  setScore = value => {
    this.animateNewCard();
    this.props.setScore(value);
    this.toggleAnswer();
  };

  animateNewCard() {
    const { bounceValue } = this.state;
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
    ]).start();
  }

  render() {
    const { showAnswer, bounceValue } = this.state;
    const { questions, currentIndex } = this.props;

    const currentQuestion = questions[currentIndex];

    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
          {showAnswer ? (
            <QuestionCard
              title="Answer"
              text={currentQuestion.answer}
              toggle={this.toggleAnswer}
              buttonText="Show Question"
            />
          ) : (
            <QuestionCard
              title={`Question ${currentIndex + 1} of ${questions.length}`}
              text={currentQuestion.question}
              toggle={this.toggleAnswer}
              buttonText="Show Answer"
            />
          )}
        </Animated.View>
        <View>
          <Button
            title="I'm a genius"
            backgroundColor={darkBlue}
            icon={{ name: 'thumbs-up', type: 'feather' }}
            disabled={!showAnswer}
            onPress={() => this.setScore(1)}
          />
          <Button
            title="I'm a dumbass"
            backgroundColor={lightBlue}
            buttonStyle={{ marginTop: 5 }}
            icon={{ name: 'thumbs-down', type: 'feather' }}
            disabled={!showAnswer}
            onPress={() => this.setScore(0)}
          />
        </View>
      </View>
    );
  }
}

export default QuizQuestions;
