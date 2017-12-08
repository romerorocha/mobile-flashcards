import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { lightBlue } from '../../utils/colors';

const QuestionCard = ({ title, text, toggle, buttonText }) => {
  return (
    <Card title={title}>
      <View style={{ alignItems: 'center' }}>
        <Text>{text}</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={toggle}>
          <Text style={{ color: lightBlue }}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default QuestionCard;
