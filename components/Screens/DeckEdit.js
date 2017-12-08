import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { darkBlue, lightBlue } from '../../utils/colors';
import { connect } from 'react-redux';

class DeckEdit extends Component {
  render() {
    const { deck, navigation } = this.props;

    const cardCount = deck ? deck.questions.length : 0;

    return deck ? (
      <View style={{ flex: 1 }}>
        <View style={styles.title}>
          <Icon
            reverse
            size={50}
            name={deck.icon}
            type="material-community"
            color={lightBlue}
          />
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
            backgroundColor={darkBlue}
            onPress={() => navigation.navigate('AddCard', { deck })}
          />
          <Button
            title="Start Quiz"
            backgroundColor={lightBlue}
            style={{ marginTop: 5 }}
            disabled={cardCount < 1}
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
    color: darkBlue
  }
});

const mapStateToProps = (state, ownProps) => ({
  deck: state ? state[ownProps.navigation.state.params.title] : null
});

export default connect(mapStateToProps)(DeckEdit);
