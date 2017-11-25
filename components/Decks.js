import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { List } from 'react-native-elements';
import DeckItem from './DeckItem';

class Decks extends Component {
  state = {
    decks: [
      { title: 'Copas', cardCount: 10 },
      { title: 'Paus', cardCount: 7 },
      { title: 'Espadas', cardCount: 8 },
      { title: 'Ouros', cardCount: 3 }
    ]
  };

  render() {
    const { decks } = this.state;
    return (
      <List containerStyle={styles.deckList}>
        <FlatList
          data={decks}
          renderItem={DeckItem}
          keyExtractor={item => item.title}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  deckList: { flex: 1, borderTopWidth: 0, borderBottomWidth: 0 }
});

export default Decks;
