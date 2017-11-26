import React from 'react';
import { FormValidationMessage } from 'react-native-elements';

const ValidationMessage = ({ empty }) => {
  return (
    empty && (
      <FormValidationMessage>{'This field is required'}</FormValidationMessage>
    )
  );
};

export default ValidationMessage;
