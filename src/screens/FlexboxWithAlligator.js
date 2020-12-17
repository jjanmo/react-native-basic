import React from 'react';
import {View, StyleSheet, Text, Button, Image, Alert} from 'react-native';
import HomeButton from '../components/HomeButton';

const FlexboxWithAlligator = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>CuteAlligator</Text>
        <Text style={styles.subtitle}>Is this REAL cute??</Text>
      </View>
      <View style={styles.middleContainer}>
        <Image
          style={styles.image}
          source={require('../assets/alligator.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          style={styles.button}
          title="let's start"
          onPress={() => Alert.alert('Hello Alligator 😜')}
          color="#ff6348"
        />
      </View>
      <HomeButton navigator={navigation.navigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#16a085',
    fontSize: 40,
  },
  subtitle: {
    textAlign: 'center',
    color: '#FAE042',
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 250,
  },
  bottomContainer: {},
  button: {},
});

export default FlexboxWithAlligator;
