import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Book from './components/Book';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Book />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
