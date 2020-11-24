import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from './src/Header';

class App extends Component {
  state = {
    name: 'jjanmo',
  };

  render() {
    return (
      <View style={styles.container}>
        <Header name={this.state.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    backgroundColor: 'dodgerblue',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
export default App;
