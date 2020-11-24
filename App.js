import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AddButton from './src/addButton';
import Header from './src/header';
import List from './src/list';

const App = () => {
  const [randomList, setRandomList] = useState([]);

  const onAddNumber = () => {
    if (checkList()) {
      alert('Too Much 😜');
      return false;
    }
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomList([...randomList, newNumber]);
  };

  const onDeleteNumber = (position) => {
    const newList = randomList.filter((number, index) => index !== position);
    setRandomList(newList);
  };

  const checkList = () => randomList.length > 10;

  return (
    <View style={styles.container}>
      <Header name={'random number'} />
      <AddButton onAddNumber={onAddNumber} />
      <List list={randomList} onDeleteNumber={onDeleteNumber} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default App;
