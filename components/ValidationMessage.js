import React from 'react';
import { FormValidationMessage } from 'react-native-elements';
import { purple } from '../utils/colors';
const ValidationMessage = ({ empty }) => {
  return (
    empty && (
      <FormValidationMessage labelStyle={{ color: purple }}>
        {'This field is required'}
      </FormValidationMessage>
    )
  );
};

export default ValidationMessage;
