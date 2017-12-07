import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import ValidationMessage from '../Util/ValidationMessage';
import { darkBlue } from '../../utils/colors';
import { addCardToDeck } from '../../actions';
import { connect } from 'react-redux';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <FormLabel containerStyle={styles.label}>Question</FormLabel>
        <FormInput
          value={question}
          onChangeText={text => this.setState({ question: text })}
          autoFocus={true}
        />
        <ValidationMessage empty={question === ''} />
        <FormLabel containerStyle={styles.label}>Answer</FormLabel>
        <FormInput
          value={answer}
          onChangeText={text => this.setState({ answer: text })}
        />
        <ValidationMessage empty={answer === ''} />
        <Button
          title="Submit"
          buttonStyle={{ marginTop: 50 }}
          backgroundColor={darkBlue}
          onPress={this.addCard}
        />
      </View>
    );
  }

  addCard = () => {
    const { addCardToDeck, navigation } = this.props;
    const { title } = navigation.state.params.deck;
    const { question, answer } = this.state;

    if (question && answer) {
      addCardToDeck(title, { question, answer });
      navigation.goBack();
    }
  };
}

const styles = StyleSheet.create({
  label: {
    marginTop: 30
  }
});

const mapDispatchToProps = dispatch => ({
  addCardToDeck(title, card) {
    dispatch(addCardToDeck(title, card));
  }
});

export default connect(null, mapDispatchToProps)(AddCard);
