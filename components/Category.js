import React from 'react';
import {View, TouchableHighlight, StyleSheet, Text, FlatList} from 'react-native';
import {colors, padding} from './_base';
import Loading from './common/Loading';

export default class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: true,
      page: 1,
      limit: 18,
      noMore: false
    }

    this.getData  = this.getData.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  /**
   * Get the list of books for this category
   */
  getData(){
    const {page, limit} = this.state;
    fetch(`http://acamicaexample.herokuapp.com/books?category_id=0&_page=${page}&_limit=${limit}`)
    .then(response =>response.json())
    .then(data => this.setState({
      data: [...this.state.data, ...data],
      noMore: data.length < limit
    }))
    .catch(error => Alert.alert('Oh snap!', 'Failed to get books.'))
    .finally(_ => this.setState({loading: false}));
  }

  /**
   * Load more as we scroll
   */
  loadMore(){
    const {page, loading, noMore} = this.state;
    if(loading || noMore) return;
    this.setState({loading: true, page: page + 1}, this.getData);
  }

  render(){
    return (
      <View>
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
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.01}
          ListFooterComponent={<Loading isLoading={this.state.loading} />}
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