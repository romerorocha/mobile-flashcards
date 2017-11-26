import React from 'react';
import { View } from 'react-native';
import TabBar from './components/TabBar';
import { Header } from 'react-native-elements';
import { purple } from './utils/colors';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'FLASHCARDS', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: purple }}
        />
        <TabBar />
      </View>
    );
  }
}
