import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const List = ({list, onDeleteNumber}) => {
  return (
    list &&
    list.length > 0 &&
    list.map((number, index) => (
      <TouchableOpacity
        key={index}
        style={styles.item}
        onPress={() => onDeleteNumber(index)}>
        <Text style={styles.text}>{number}</Text>
      </TouchableOpacity>
    ))
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#95a5a6',
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
  },
  text: {
    color: 'white',
  },
});

export default List;
