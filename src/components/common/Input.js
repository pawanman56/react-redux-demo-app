import React from 'react';
import { TextInput } from 'react-native';

export default Input = ({ children }) => {
  const { inputStyle } = styles;

  return (
    <TextInput style={inputStyle}>
      {children}
    </TextInput>
  );
};

const styles = {
  inputStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    padding: 12,
  },
};
