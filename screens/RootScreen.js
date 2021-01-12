import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const RootScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
             <View style={styles.topContainer}>
                 <Text style={styles.title}>
                        Welcome !
                 </Text>     
             </View>
             <View  style={styles.bottomContainer}>
                   <Text style={styles.title}>
                          Learn The Basics of React Navigation !
                   </Text>
                   <Text style={{marginTop:20, opacity:0.7, fontWeight:'bold', fontSize:16}}>
                       How React Native Works
                    </Text>
                    <View style={styles.buttonContainer}> 
                          <TouchableOpacity style={styles.button} onPress={() =>navigation.push('Login') }>
                                 <Text style={styles.startedText}>
                                       Get Started
                                 </Text>
                          </TouchableOpacity>
                    </View>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'#15617d'
    },
    topContainer: {
        flex:2,
        justifyContent:'center',
        paddingHorizontal:30,
    },
    title: {
         fontSize:28,
         color:'coral',
         fontWeight:"bold",
         paddingVertical:2
    },
    bottomContainer: {
         flex:1,
         backgroundColor:'#fff',
         borderTopLeftRadius:40,
         borderTopRightRadius:40,
         paddingVertical:50,
         paddingHorizontal:30,
    },
    buttonContainer: {
       marginTop:50,
       alignItems:'flex-end'
    },
    button: {
        backgroundColor:'#15617d',
        padding:16,
        borderRadius:50,
        width:160,
        alignItems:'center'
    },
    startedText: {
           color:'#fff',
           justifyContent:'center',
           alignItems:'center',
           fontWeight:'bold',
           fontSize:16,
    }
})

export default RootScreen;
