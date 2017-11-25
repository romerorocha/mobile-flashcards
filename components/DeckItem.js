import React from 'react';
import { ListItem } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { blue, purple } from '../utils/colors';

const DeckItem = ({ item }) => {
  return (
    <ListItem
      avatar={<Feather name="box" color={purple} size={50} />}
      title={item.title}
      badge={{
        value: `${item.cardCount} cards`,
        containerStyle: { marginTop: 15, backgroundColor: blue }
      }}
    />
  );
};

export default DeckItem;
