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
    icon: ''
  };

  handleSubmit = () => {
    const { title, icon } = this.state;
    const { addNewDeck, navigation } = this.props;

    if (title && icon) {
      addNewDeck(title, icon);
      this.setState({ title: '', icon: '' });
      navigation.navigate('DeckEdit', { title });
    }
  };

  render() {
    const { title, icon } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Text h4 style={styles.text}>
          Create new deck
        </Text>
        <FormLabel>Title</FormLabel>
        <FormInput
          value={title}
          onChangeText={title => this.setState({ title })}
        />
        <ValidationMessage empty={!title} />
        <FormLabel>Icon</FormLabel>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10
          }}
        >
          <Icon
            raised={icon !== 'language-javascript'}
            reverse
            size={30}
            name="language-javascript"
            type="material-community"
            color={lightBlue}
            onPress={() => this.setState({ icon: 'language-javascript' })}
          />
          <Icon
            raised={icon !== 'language-php'}
            reverse
            size={30}
            name="language-php"
            type="material-community"
            color={lightBlue}
            onPress={() => this.setState({ icon: 'language-php' })}
          />
          <Icon
            raised={icon !== 'language-csharp'}
            reverse
            size={30}
            name="language-csharp"
            type="material-community"
            color={lightBlue}
            onPress={() => this.setState({ icon: 'language-csharp' })}
          />
          <Icon
            raised={icon !== 'language-python'}
            reverse
            size={30}
            name="language-python"
            type="material-community"
            color={lightBlue}
            onPress={() => this.setState({ icon: 'language-python' })}
          />
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
    marginTop: 20
  }
});

const mapDispatchToProps = dispatch => ({
  addNewDeck(deck, icon) {
    dispatch(addNewDeck(deck, icon));
  }
});

export default connect(null, mapDispatchToProps)(NewDeck);
