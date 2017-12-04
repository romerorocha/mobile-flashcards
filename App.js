import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import MainNavigator from './components/MainNavigator';

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
