import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import MyImagePicker from './MyImagePicker';

const PhoneResource = () => {
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

export default PhoneResource;
