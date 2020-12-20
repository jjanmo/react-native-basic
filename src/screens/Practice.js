import React from 'react';
import {View} from 'react-native';
import CustomButton from '../components/CustomButton';
import HomeButton from '../components/HomeButton';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  background-color: #fab1a0;
`;

const Practice = ({navigation}) => {
  const openDrawer = () => {
    console.log('click');
  };
  return (
    <Container>
      <CustomButton
        text="Open Drawer"
        backgroundColor="#ff7675"
        handler={openDrawer}
      />
      <HomeButton navigator={navigation.navigate} />
    </Container>
  );
};

export default Practice;
