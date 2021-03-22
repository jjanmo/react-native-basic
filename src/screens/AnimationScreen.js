import React from 'react';
import {Text} from 'react-native';
import HomeButton from '../components/HomeButton';

const AnimationScreen = ({navigation}) => {
  return (
    <>
      <Text>Animation Screen</Text>
      <HomeButton navigator={navigation.navigate} />
    </>
  );
};

export default AnimationScreen;
