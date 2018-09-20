import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../_base';
import Book from '../Book';
import Loading from '../common/Loading';

export default class BookScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    const {id} = this.props.navigation.state.params;
    fetch(`http://acamicaexample.herokuapp.com/books/${id}`)
      .then(response =>response.json())
      .then(data => this.setState({
        data: data
      }))
      .catch(error => Alert.alert('Oh snap!', 'Failed to get book.'))
      .finally(_ => this.setState({loading: false}));
  }

  render() {
    const {loading, data: book} = this.state;
    return (
      loading ? <Loading isLoading={loading} /> :
        <View style={styles.container}>
          <Book
            author={book.author}
            image={book.image}
            description={book.description}
            url={book.url}
          />
        </View>
    );
  }
}

BookScreen.navigationOptions = {
  title: 'Book'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground
  },
});
