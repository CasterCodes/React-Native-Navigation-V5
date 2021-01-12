import React from 'react';

import {Text, View, StyleSheet, Button} from 'react-native'

const SearchScreen = ({navigation}) => {
    return (
          <View style={styles.searchScreenContainer}>
                 <Text>Search Screen</Text>
                 <View><Button title='Profile Screen'  onPress={() => navigation.navigate('ProfileTab', {
                         screen:'Profile',
                         params:{}
                 }) }/></View>
          </View>
    )
}


const styles = StyleSheet.create({
    searchScreenContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
      
    }
})


export default SearchScreen
