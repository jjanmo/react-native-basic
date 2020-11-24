import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Header = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => alert('click ⭐️')}>
      <View>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  text: {
    fontSize: 30,
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default Header;
