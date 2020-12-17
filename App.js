import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Counter from './src/screens/Counter';
import Home from './src/screens/Home';
import Practice from './src/screens/Practice';
import FlexboxWithAlligator from './src/screens/FlexboxWithAlligator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen
          name="FlexboxWithAlligator"
          component={FlexboxWithAlligator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
