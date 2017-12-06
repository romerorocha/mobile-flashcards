import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import MainNavigator from './components/Navigation/MainNavigator';
import { purple } from './utils/colors';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
