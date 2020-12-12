import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.chatview}>
      <Text>This is ChatView</Text>
      <Button
        title="Go HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatview: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
