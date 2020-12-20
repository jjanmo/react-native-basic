import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({text, handler}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => handler()}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#a29bfe',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CustomButton;
