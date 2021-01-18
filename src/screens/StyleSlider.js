import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Link from '../components/Link';
import Slider from '@react-native-community/slider';

const StyleSlider = ({navigation}) => {
  const [value, setValue] = useState(0);

  const onValueChange = (value) => setValue(value);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={value}
        minimumValue={0}
        maximumValue={100}
        onValueChange={onValueChange}
        maximumTrackTintColor="grey"
        minimumTrackTintColor="tomato"
        step={1}
      />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    height: 40,
    width: 300,
  },
  value: {},
});

export default StyleSlider;

/*
 @react-native-community/slider
style slider
=> background color / color를 slider로 조절할 수 있게 만드는 기능

or

border radius 를 조절하는 방법


*/
