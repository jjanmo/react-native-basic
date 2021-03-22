import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const Move = () => {
  const boxXY = useRef(new Animated.ValueXY(0, 0)).current;

  useEffect(() => {
    Animated.spring(boxXY, {
      toValue: {x: 50, y: 300},
    }).start();
  }, []);

  return (
    <Animated.View style={boxXY.getLayout()}>
      <View style={styles.container}>
        <View style={styles.box} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  box: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
  },
});

export default Move;
