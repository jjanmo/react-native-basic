import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Link = ({navigator, destination, color}) => {
  return (
    <View style={styles.container}>
      <Button
        title={`Go to ${destination}`}
        style={styles.button}
        color={color}
        onPress={() => navigator(destination)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {},
});

export default Link;
