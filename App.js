import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Counter from './src/screens/Counter';
import Home from './src/screens/Home';
import Practice from './src/screens/Practice';
import FlexboxWithAlligator from './src/screens/FlexboxWithAlligator';
import DatePicker from './src/screens/DatePicker';
import StyleSlider from './src/screens/StyleSlider';
import AnimationScreen from './src/screens/AnimationScreen';
import PhoneResource from './src/phoneResource/PhoneResouce';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen name="DatePicker" component={DatePicker} />
        <Stack.Screen
          name="FlexboxWithAlligator"
          component={FlexboxWithAlligator}
        />
        <Stack.Screen name="StyleSlider" component={StyleSlider} />
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
        <Stack.Screen name="PhoneResource" component={PhoneResource} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
