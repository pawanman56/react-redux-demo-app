import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    padding: 10,
    shadowColor: '#A9A9A9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    elevation: 2,
    position: 'relative', 
  },

  textStyle: {
    fontSize: 20,
    fontWeight: '500',
  },
};
