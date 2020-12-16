import React from 'react';
import {View, StyleSheet} from 'react-native';
import Link from '../components/Link';

const Home = ({navigation}) => (
  <View style={styles.container}>
    <Link
      navigator={navigation.navigate}
      destination="Counter"
      color="#4834d4"
    />
    <Link
      navigator={navigation.navigate}
      destination="Practice"
      color="#ff7979"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default Home;
