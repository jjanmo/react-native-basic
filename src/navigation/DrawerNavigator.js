import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Flex1 from '../practice/Flex1';
import Flex2 from '../practice/Flex2';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Flex1" component={Flex1} />
        <Drawer.Screen name="Flex2" component={Flex2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
