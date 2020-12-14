import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => (
  <View style={styles.container}>
    <Text>This is Home</Text>
    <Button
      title="Counter"
      style={styles.navigator}
      color={'#4834d4'}
      onPress={() => navigation.navigate('Counter')}
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
    marginVertical: 100,
  },
});

export default Home;
