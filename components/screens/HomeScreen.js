import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Book from '../Book';
import Category from '../Category';
import Categories from '../Categories';
import { colors } from '../_base';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Check the categories"
          onPress={() => {
            this.props.navigation.navigate('Categories');
          }}
        />
        <Category 
          id={'0'}
          limit={3}
          disableInfiniteScroll={true}
          onItemPress={(bookId) => {
            this.props.navigation.navigate('Book', {id: bookId});
          }}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Recommended Books'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground
  },
});
