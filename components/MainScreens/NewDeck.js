import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../../actions';
import {
  Text,
  FormLabel,
  FormInput,
  Button,
  Icon
} from 'react-native-elements';
import { darkBlue, lightBlue } from '../../utils/colors';
import ValidationMessage from '../Util/ValidationMessage';

class NewDeck extends Component {
  state = {
    title: '',
    icon: 'language-javascript',
    icons: [
      'language-javascript',
      'language-csharp',
      'language-python',
      'language-cpp',
      'language-php',
      'language-html5',
      'language-css3',
      'git',
      'apple',
      'android'
    ]
  };

  handleSubmit = () => {
    const { title, icon } = this.state;
    const { addNewDeck, navigation } = this.props;

    if (title) {
      addNewDeck(title, icon);
      this.setState({ title: '', icon: 'language-javascript' });
      navigation.navigate('DeckEdit', { title });
    }
  };

  pick = icon => {
    this.setState({ icon });
  };

  render() {
    const { title, icon, icons } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Text h4 style={styles.text}>
          Create new deck
        </Text>
        <FormLabel containerStyle={{ marginTop: 20 }}>
          Title ({20 - title.length})
        </FormLabel>
        <FormInput
          value={title}
          maxLength={20}
          onChangeText={title => this.setState({ title })}
        />
        <ValidationMessage empty={!title} />
        <FormLabel>Icon</FormLabel>
        <View style={styles.icons}>
          {icons.map(item => (
            <Icon
              key={item}
              raised={icon !== item}
              reverse
              size={25}
              name={item}
              type="material-community"
              color={icon === item ? darkBlue : lightBlue}
              onPress={() => this.pick(item)}
            />
          ))}
        </View>
        <Button
          title="Submit"
          buttonStyle={styles.submit}
          backgroundColor={darkBlue}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50,
    fontWeight: 'bold',
    color: darkBlue
  },
  submit: {
    marginTop: 30
  },
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10
  }
});

const mapDispatchToProps = dispatch => ({
  addNewDeck(deck, icon) {
    dispatch(addNewDeck(deck, icon));
  }
});

export default connect(null, mapDispatchToProps)(NewDeck);
