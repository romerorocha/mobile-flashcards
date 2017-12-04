import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { fetchDecks } from '../../actions';
import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { blue, purple } from '../../utils/colors';

class Decks extends Component {
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
              <ListItem
                onPress={() =>
                  navigation.navigate('DeckEdit', { title: item.title })
                }
                avatar={<Feather name="box" color={purple} size={50} />}
                title={item.title}
                badge={{
                  value: `${item.questions.length} cards`,
                  containerStyle: {
                    marginVertical: 14,
                    backgroundColor: blue
                  }
                }}
              />
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
  decks: state
    ? Object.keys(state)
        .map(key => ({
          title: state[key].title,
          questions: state[key].questions
        }))
        .sort((a, b) => a.title.localeCompare(b.title))
    : []
});

const mapDispatchToProps = dispatch => ({
  fetchDecks(decks) {
    dispatch(fetchDecks(decks));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
