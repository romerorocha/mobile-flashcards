import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Text,
  FormLabel,
  FormInput,
  Button,
  Header
} from 'react-native-elements';
import ValidationMessage from './ValidationMessage';
import { purple } from '../utils/colors';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';

class NewDeck extends Component {
  state = {
    title: null
  };

  render() {
    const { title } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'FLASHCARDS', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: purple }}
        />
        <Text h4 style={styles.header}>
          Create new deck
        </Text>
        <FormLabel>Title</FormLabel>
        <FormInput
          value={title}
          onChangeText={title => this.setState({ title })}
          autoFocus={true}
        />
        <ValidationMessage empty={title === ''} />
        <Button
          title="Submit"
          buttonStyle={styles.submit}
          onPress={this.handleSubmit}
          backgroundColor={purple}
        />
      </View>
    );
  }

  handleSubmit = () => {
    const { title } = this.state;

    if (!title) {
      this.setState({ title: '' });
      return;
    }

    this.props.addNewDeck(title);
    saveDeckTitle(title);

    this.setState({ title: '', empty: false });

    this.props.navigation.navigate('DeckEdit', { title });
  };
}

const styles = StyleSheet.create({
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
