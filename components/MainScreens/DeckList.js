import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List } from 'react-native-elements';
import { fetchDecks } from '../../actions';
import { connect } from 'react-redux';
import Deck from './Deck';

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    const { decks, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <List containerStyle={styles.deckList}>
          <FlatList
            data={decks}
            renderItem={({ item }) => (
              <Deck item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.title}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckList: {
    flex: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0
  }
});

const mapStateToProps = state => ({
  decks: state ? getSortedList(state) : []
});

const mapDispatchToProps = dispatch => ({
  fetchDecks(decks) {
    dispatch(fetchDecks(decks));
  }
});

const getSortedList = state => {
  return Object.keys(state)
    .map(key => ({
      title: state[key].title,
      questions: state[key].questions,
      icon: state[key].icon
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
