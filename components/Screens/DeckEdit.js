import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { purple, lightPurp } from '../../utils/colors';
import { connect } from 'react-redux';

class DeckEdit extends Component {
  render() {
    const { deck, navigation } = this.props;
    const cardCount = deck.questions.length;

    return deck ? (
      <View style={{ flex: 1 }}>
        <View style={styles.title}>
          <Text h2 style={styles.text}>
            {deck.title}
          </Text>
          <Text style={styles.text}>
            {cardCount} {cardCount === 1 ? 'card' : 'cards'}
          </Text>
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
            style={{ marginTop: 5 }}
            disabled={deck.questions.length < 1}
            onPress={() => navigation.navigate('Quiz', { deck })}
          />
        </View>
      </View>
    ) : (
      false
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: purple
  }
});

const mapStateToProps = (state, ownProps) => ({
  deck: state ? state[ownProps.navigation.state.params.title] : null
});

export default connect(mapStateToProps)(DeckEdit);
