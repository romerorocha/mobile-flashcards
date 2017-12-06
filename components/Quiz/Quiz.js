import React, { Component } from 'react';
import QuizQuestions from './QuizQuestions';
import QuizResults from './QuizResults';

class Quiz extends Component {
  state = {
    currentIndex: 0,
    score: 0
  };

  setScore = value => {
    this.setState(state => ({
      score: state.score + value,
      currentIndex: state.currentIndex + 1
    }));
  };

  resetQuiz = () => {
    this.setState({ currentIndex: 0, score: 0 });
  };

  render() {
    const { questions } = this.props.navigation.state.params.deck;
    const { currentIndex, score } = this.state;

    return currentIndex === questions.length ? (
      <QuizResults
        score={score}
        questionsCount={questions.length}
        reset={this.resetQuiz}
      />
    ) : (
      <QuizQuestions
        currentIndex={currentIndex}
        questions={questions}
        setScore={this.setScore}
      />
    );
  }
}

export default Quiz;
