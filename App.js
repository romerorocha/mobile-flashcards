import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import TabBar from './components/TabBar';
import DeckEdit from './components/DeckEdit';
import { purple, white } from './utils/colors';
import { StackNavigator } from 'react-navigation';

const MainNavigator = StackNavigator({
  Home: {
    screen: TabBar
  },
  Deck: {
    screen: DeckEdit,
    navigationOptions: {
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
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
