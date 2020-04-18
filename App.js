import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {vibrate} from './utils'

// causes phone to vibrate
//vibrate()

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Oup App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
