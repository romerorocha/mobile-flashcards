import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import MainNavigator from './components/Navigation/MainNavigator';

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
