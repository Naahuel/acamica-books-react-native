import React from 'react';
import {View, TouchableHighlight, StyleSheet, Text, FlatList} from 'react-native';
import {colors, padding} from './_base';

const Category = (props) =>{
  return(
    <View>
      <FlatList
        data={[{name: 'Category 1', id:'1'}, {name: 'Category 2', id:'2'}]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableHighlight 
            style={styles.listItem}
            underlayColor={colors.primary}
            onPress={() => console.log('pressed')}
          >
            <Text>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: padding.md,
    backgroundColor: colors.background
  }
});

export default Category;