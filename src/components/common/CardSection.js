import React from 'react';
import { View } from 'react-native';

export default CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
  }
};
