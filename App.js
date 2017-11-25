import React from 'react';
import { Text, View } from 'react-native';
import TabBar from './components/TabBar';
import AppStatusBar from './components/AppStatusBar';
import { purple } from './utils/colors';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar />
        <TabBar />
      </View>
    );
  }
}
