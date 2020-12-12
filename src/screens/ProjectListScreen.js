import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function ProjectListScreen() {
  return (
    <View style={styles.container}>
      <Text>This is ProjectsListScreen</Text>
    </View>
  );
}

export default ProjectListScreen;
