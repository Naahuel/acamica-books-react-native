import React from 'react';
import PropTypes from 'prop-types';
import {Alert, View, TouchableHighlight, StyleSheet, Text, FlatList} from 'react-native';
import {colors, padding} from './_base';
import Loading from './common/Loading';

export default class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: true,
      page: props.page || 1,
      limit: props.limit || 18,
      noMore: props.disableInfiniteScroll || false
    };

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
    const {page, limit, noMore} = this.state;
    const {id} = this.props;
    fetch(`http://acamicaexample.herokuapp.com/books?category_id=${id}&_page=${page}&_limit=${limit}`)
      .then(response =>response.json())
      .then(data => this.setState({
        data: [...this.state.data, ...data],
        noMore: noMore || data.length < limit
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
              onPress={this.props.onItemPress.bind(this, item.id)}
            >
              <Text>{item.name}</Text>
            </TouchableHighlight>
          )}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.01}
          ListFooterComponent={<Loading isLoading={this.state.loading} />}
        />
      </View>
    );
  }
}

Category.propTypes = {
  id: PropTypes.string.isRequired,
  limit: PropTypes.number,
  page: PropTypes.number,
  disableInfiniteScroll: PropTypes.bool  
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: padding.md,
    backgroundColor: colors.background
  }
});