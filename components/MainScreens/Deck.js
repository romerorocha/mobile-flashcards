import React from 'react';
import { ListItem } from 'react-native-elements';
import { purple, blue } from '../../utils/colors';
import { Feather } from '@expo/vector-icons';

const Deck = ({ item, navigation }) => {
  const cardCount = item.questions.length;

  return (
    <ListItem
      onPress={() => navigation.navigate('DeckEdit', { title: item.title })}
      avatar={<Feather name="box" color={purple} size={50} />}
      title={item.title}
      badge={{
        value: `${cardCount} ${cardCount === 1 ? 'card' : 'cards'}`,
        containerStyle: {
          marginVertical: 14,
          backgroundColor: blue
        }
      }}
    />
  );
};

export default Deck;
