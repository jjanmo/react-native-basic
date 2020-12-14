import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const AddButton = (props) => {
  return (
    <View style={styles.container}>
      <Button title={'Add Number'} onPress={props.onAddNumber} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
export default AddButton;
