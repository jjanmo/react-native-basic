import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const HomeButton = ({navigator}) => {
  const goHome = () => {
    navigator('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={goHome}>
        <Image
          style={styles.image}
          source={require('../assets/white_home.png')}
        />
        <View style={styles.seperateLine} />
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#22a6b3',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: 30,
    height: 30,
    color: '#fff',
  },
  seperateLine: {
    backgroundColor: '#fff',
    width: 5,
    height: 40,
    marginHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeButton;
