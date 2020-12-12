import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.settingsview}>
      <Text>This is SettingView</Text>
      <Button
        title="Go HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsview: {
    backgroundColor: 'limegreen',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
