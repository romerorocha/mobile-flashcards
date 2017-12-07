import React from 'react';
import { darkBlue, white } from '../../utils/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import DeckList from '../MainScreens/DeckList';
import NewDeck from '../MainScreens/NewDeck';

const TabBar = TabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="cards-playing-outline"
            size={30}
            color={tintColor}
          />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-outline" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: darkBlue,
      style: {
        height: 56,
        padding: 5,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default TabBar;
