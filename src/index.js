import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import Reactotron from './config/ReactotronConfig';
import DevTools from './config/ReactDevTools';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
