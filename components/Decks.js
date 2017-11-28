import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { List } from 'react-native-elements';
import DeckItem from './DeckItem';
import { getDecks } from '../utils/api';
import { loadAllDecks } from '../actions';
import { connect } from 'react-redux';

class Decks extends Component {
  componentDidMount() {
    getDecks().then(decks => {
      this.props.loadDecks(decks);
    });
  }

  render() {
    const { decks } = this.props;
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
  deckList: { flex: 1, borderTopWidth: 1, borderBottomWidth: 0 }
});

const mapStateToProps = state => ({
  decks: Object.keys(state)
    .map(key => ({
      title: state[key].title,
      cardCount: state[key].questions.length
    }))
    .sort((a, b) => a.title.localeCompare(b.title))
});

const mapDispatchToProps = dispatch => ({
  loadDecks(decks) {
    dispatch(loadAllDecks(decks));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
