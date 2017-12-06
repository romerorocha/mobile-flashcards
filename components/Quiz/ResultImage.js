import React from 'react';
import { Avatar } from 'react-native-elements';

const ResultImage = ({ passed }) => {
  return passed ? (
    <Avatar xlarge rounded source={require('../../img/chuck.jpg')} />
  ) : (
    <Avatar xlarge rounded source={require('../../img/facepalm.jpg')} />
  );
};

export default ResultImage;
