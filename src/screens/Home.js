import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => (
  <View style={styles.container}>
    <Button
      title="Counter"
      style={styles.navigator}
      color={'#4834d4'}
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title="Practice"
      style={styles.navigator}
      color={'#4834d4'}
      onPress={() => navigation.navigate('Practice')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigator: {
    marginTop: 10,
  },
});

export default Home;
