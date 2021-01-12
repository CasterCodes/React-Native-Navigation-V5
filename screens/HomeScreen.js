import React from 'react'
import {View, Text, Button,StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.homeScreenContainer}>
              <View>
                 <Text>Home Screen</Text>
              </View>
              <View>
                    <Button title='Profile' onPress={() => navigation.navigate('ProfileTab', {
                        screen:"Profile"
                    })}/>
              </View>
        </View>
    )
}


const styles = StyleSheet.create({
        homeScreenContainer: {
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
})

export default HomeScreen
