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
import { addNewDeck } from '../actions';
import { connect } from 'react-redux';

class NewDeck extends Component {
  state = {
    title: ''
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
        <Text h4 style={styles.text}>
          Create new deck
        </Text>
        <FormLabel>Title</FormLabel>
        <FormInput
          value={title}
          onChangeText={title => this.setState({ title })}
        />
        <ValidationMessage empty={!title} />
        <Button
          title="Submit"
          buttonStyle={styles.submit}
          backgroundColor={purple}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }

  handleSubmit = () => {
    const { title } = this.state;
    const { addNewDeck, navigation } = this.props;

    if (title) {
      addNewDeck(title);
      this.setState({ title: '' });
      navigation.navigate('DeckEdit', { title });
    }
  };
}

const styles = StyleSheet.create({
  text: {
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
    dispatch(addNewDeck(deck));
  }
});

export default connect(null, mapDispatchToProps)(NewDeck);
