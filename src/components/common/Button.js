import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default Button = ({ onPress, children }) => {
  const { buttonStyle, buttonTextStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={buttonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    padding: 12,
  },

  buttonTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#007AFF',
    textAlign: 'center',
  },
};
