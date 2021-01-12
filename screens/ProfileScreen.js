import React from 'react'
import {View, Text, Button,StyleSheet} from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.profileScreenContainer}>
              <View>
                 <Text>Profile Screen</Text>
              </View>
              <View>
                    <Button title='Home' onPress={() => {navigation.navigate('HomeTab', {
                           screen:'Home',
                           params:{}
                    })}}/>
              </View>
        </View>
    )
}


const styles = StyleSheet.create({
        profileScreenContainer: {
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
})

export default ProfileScreen;
