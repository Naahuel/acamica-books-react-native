import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Category from '../Category';
import { colors } from '../_base';

export default class CategoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Category
          id={this.props.navigation.state.params.id}
          onItemPress={(bookId) => {
            this.props.navigation.navigate('Book', {id: bookId});
          }}
        />
      </View>
    );
  }
}

CategoryScreen.navigationOptions = {
  title: 'Category'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground
  },
});
