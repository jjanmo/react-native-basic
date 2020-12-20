import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 25px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 18px;
`;

const CustomButton = ({text, backgroundColor, handler}) => {
  return (
    <Container>
      <Button
        backgroundColor={backgroundColor}
        activeOpacity={0.7}
        onPress={() => handler()}>
        <ButtonText>{text}</ButtonText>
      </Button>
    </Container>
  );
};

export default CustomButton;
