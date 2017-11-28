import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, FormLabel, FormInput, Button } from 'react-native-elements';
import ValidationMessage from './ValidationMessage';
import { purple, white } from '../utils/colors';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';

class NewDeck extends Component {
  state = {
    title: '',
    empty: false
  };

  render() {
    const { empty, title } = this.state;

    return (
      <View style={styles.background}>
        <Text h4 style={styles.header}>
          Create new deck
        </Text>
        <FormLabel>Title</FormLabel>
        <FormInput value={title} onChangeText={this.handleChange} />
        <ValidationMessage empty={empty} />
        <Button
          title="Submit"
          buttonStyle={styles.submit}
          onPress={this.handleSubmit}
          backgroundColor={purple}
        />
      </View>
    );
  }

  handleChange = title => {
    this.setState({ empty: !title, title });
  };

  handleSubmit = () => {
    const { title } = this.state;

    if (title) {
      this.props.addNewDeck(title);
      saveDeckTitle(title);
      this.setState({ title: '', empty: false });
    }
  };
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: white
  },
  header: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50,
    fontWeight: 'bold',
    color: purple
  },
  submit: {
    marginTop: 20
  }
});

const mapDispatchToProps = dispatch => ({
  addNewDeck(deck) {
    dispatch(addDeck(deck));
  }
});

export default connect(null, mapDispatchToProps)(NewDeck);
