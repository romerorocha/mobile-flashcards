import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import DeckEdit from './components/DeckEdit';
import AddCard from './components/AddCard';
import TabBar from './components/TabBar';
import { purple, white } from './utils/colors';
import { StackNavigator } from 'react-navigation';

const MainNavigator = StackNavigator({
  Home: {
    screen: TabBar
  },
  DeckEdit: {
    screen: DeckEdit,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
