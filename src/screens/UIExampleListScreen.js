import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function UIExampleListScreen() {
  return (
    <View style={styles.container}>
      <Text>This is UIExampleListScreen</Text>
    </View>
  );
}

export default UIExampleListScreen;
