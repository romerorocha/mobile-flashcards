import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { purple } from '../utils/colors';

const AppStatusBar = () => {
  return (
    <View
      style={{ backgroundColor: purple, height: Constants.statusBarHeight }}
    >
      <StatusBar
        translucent
        backgroundColor={purple}
        barStyle="light-content"
      />
    </View>
  );
};

export default AppStatusBar;
