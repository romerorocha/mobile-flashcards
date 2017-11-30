import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import ValidationMessage from './ValidationMessage';
import { purple } from '../utils/colors';

class AddCard extends Component {
  state = {
    question: null,
    answer: null
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <FormLabel>Question</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ question: text })}
          autoFocus={true}
          value={question}
        />
        <ValidationMessage empty={question === ''} />
        <FormLabel>Answer</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ answer: text })}
          autoFocus={true}
          value={answer}
        />
        <ValidationMessage empty={answer === ''} />
        <Button
          title="Submit"
          buttonStyle={{ marginTop: 20 }}
          backgroundColor={purple}
        />
      </View>
    );
  }
}

export default AddCard;