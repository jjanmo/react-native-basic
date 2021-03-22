import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Move from '../animations/Move';
import HomeButton from '../components/HomeButton';

const AnimationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Move />
      <HomeButton navigator={navigation.navigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AnimationScreen;
