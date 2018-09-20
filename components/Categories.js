import React from 'react';
import {View, TouchableHighlight, StyleSheet, Text, FlatList} from 'react-native';
import {colors, padding} from './_base';
import Loading from './common/Loading';

export default class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    fetch('http://acamicaexample.herokuapp.com/categories')
    .then(response =>response.json())
    .then(data => this.setState({data}))
    .catch(error => Alert.alert('Oh snap!', 'Failed to get categories.'))
    .finally(_ => this.setState({loading: false}));
  }

  render(){
    return (
      <View>
        <Loading isLoading={this.state.loading} />
        <FlatList
          data={this.state.data}
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
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: padding.md,
    backgroundColor: colors.background
  }
});