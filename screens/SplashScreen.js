import React, {useContext} from 'react'
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import AuthContext from '../components/context/AuthContext';

const SplashScreen = () => {
    const context = useContext(AuthContext);
    console.log(context)
    return (
       <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size='large' color='coral' />
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center'
    },
    horizontal:{
          flexDirection:'row',
          justifyContent:"space-around",
          padding:10,
    }
})

export default SplashScreen
