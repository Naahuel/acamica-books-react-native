import React from 'react';
import {Alert, Image, Button, View, Text, StyleSheet, Linking} from 'react-native';
import {colors, padding, fonts} from './_base';

const Book = (props) =>{
  const _handleButtonPress = () => {
    Linking.openURL('https://google.com')
           .catch(err => {
              Alert.alert('Oh snap!', 'Something went wrong');
              console.log(err);
           }); 
  }

  return(
    <View style={styles.bookContainer}>
      <View style={styles.bookHeaderContainer}>
        <View style={styles.bookImage}>
          <Image 
            style={{width: 60, height: 90}}
            source={{uri: 'https://placehold.it/60x90'}}
          />
        </View>
        <View style={styles.bookAuthor}>
          <Text>by <Text style={styles.bookAuthorText}>Author</Text></Text>
        </View>
      </View>
      <View style={styles.bookDescriptionContainer}>
        <Text>Description</Text>
      </View>
      <View style={styles.bookButtonContainer}>
        <Button title="Check on Amazon" onPress={_handleButtonPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bookContainer:{
    flex: 1,
    alignSelf: 'stretch',
  },
  bookHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary
  },
  bookAuthor: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookAuthorText:{
    fontSize: fonts.size.lg,
  },
  bookImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookDescriptionContainer: {
    flex:3,
    padding: padding.sm,
    // backgroundColor: 'red'
  },
  bookButtonContainer:{
    height: 50,
    padding: padding.sm,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'blue'
  }
});

export default Book;