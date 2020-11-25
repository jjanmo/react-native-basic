import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import AddButton from './src/addButton';
import Header from './src/header';
import List from './src/list';

const App = () => {
  const [randomList, setRandomList] = useState([]);

  const onAddNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomList([...randomList, newNumber]);
  };

  const onDeleteNumber = (position) => {
    const newList = randomList.filter((number, index) => index !== position);
    setRandomList(newList);
  };

  return (
    <View style={styles.container}>
      <Header name={'random number'} />
      <AddButton onAddNumber={onAddNumber} />
      <ScrollView style={{width: '100%'}}>
        <List list={randomList} onDeleteNumber={onDeleteNumber} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
});

export default App;
