import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Book from './components/Book';
import Category from './components/Category';
import Categories from './components/Categories';
import { colors } from './components/_base';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Book
          author={'Charles D.'}
          image={'https://placehold.it/60x90'}
          description={'lorem ipsum'}
          url={'https://www.amazon.com'}
        /> */}
        <Category />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground
  },
});
