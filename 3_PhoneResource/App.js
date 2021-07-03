import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyImagePicker from './src/MyImagePicker';

const App = () => {
  return (
    <View style={styles.container}>
      <MyImagePicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dff9fb',
  },
});

export default App;
