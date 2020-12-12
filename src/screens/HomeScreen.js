import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UIExampleListScreen from './UIExampleListScreen';
import ProjectListScreen from './ProjectListScreen';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <>
      <NavigationContainer independent>
        <Stack.Navigator>
          <Stack.Screen
            name="UIExampleListScreen"
            component={UIExampleListScreen}
          />
          <Stack.Screen
            name="ProjectListScreen"
            component={ProjectListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <View style={styles.homeview}>
        <Button
          title="UI Examples"
          onPress={() => navigation.navigate('UIExampleScreen')}
        />
        <Button
          title="Small Projects"
          onPress={() => navigation.navigate('ProjectsListScreen')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homeview: {
    backgroundColor: 'tomato',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
