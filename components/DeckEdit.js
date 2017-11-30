import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { purple, lightPurp } from '../utils/colors';

class DeckEdit extends Component {
  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;

    return (
      <View style={styles.background}>
        <View style={styles.text}>
          <Text h2>{deck.title}</Text>
          <Text>{deck.questions.length} cards</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Add Card"
            backgroundColor={purple}
            onPress={() => navigation.navigate('AddCard', { deck })}
          />
          <Button
            title="Start Quiz"
            backgroundColor={lightPurp}
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DeckEdit;
