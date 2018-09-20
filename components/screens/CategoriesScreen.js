import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from '../Categories';
import { colors } from '../_base';

export default class CategoriesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Categories
          onItemPress={(itemId) => {
            this.props.navigation.navigate('Category', {id: itemId});
          }}
        />
      </View>
    );
  }
}

CategoriesScreen.navigationOptions = {
  title: 'Categories'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground
  },
});
