import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onIncrease}>
          <Image style={styles.image} source={require('../assets/add.png')} />
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={onDecrease}>
          <Image style={styles.image} source={require('../assets/minus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#dff9fb',
  },
  title: {
    fontSize: 30,
    textTransform: 'uppercase',
    marginVertical: 50,
  },
  buttonContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#ffeaa7',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  count: {
    fontSize: 40,
    marginHorizontal: 60,
  },
});

export default Counter;
