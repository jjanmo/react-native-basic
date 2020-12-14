import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 30,
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default Header;
