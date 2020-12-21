import React from 'react';
import {View} from 'react-native';
import CustomButton from '../components/CustomButton';
import HomeButton from '../components/HomeButton';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Flex1 from '../practice/Flex1';
import Flex2 from '../practice/Flex2';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  background-color: #fab1a0;
`;

const Drawer = createDrawerNavigator();

const Practice = ({navigation}) => {
  const openDrawer = () => {
    console.log('click');
  };
  return (
    <NavigationContainer independent>
      <Drawer.Navigator>
        <Drawer.Screen name="Flex1" component={Flex1} />
        <Drawer.Screen name="Flex2" component={Flex2} />
      </Drawer.Navigator>
      <CustomButton
        text="Open Drawer"
        backgroundColor="#ff7675"
        handler={openDrawer}
      />
      <HomeButton navigator={navigation.navigate} />
    </NavigationContainer>
  );
};

export default Practice;
