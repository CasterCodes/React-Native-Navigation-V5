import React, {useContext,useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthContext from '../components/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

const LoginInScreen = ({navigation}) => {
    const authContext =  useContext(AuthContext);
    const {Login} = authContext;
    const [formData, setFormData] =useState({
        email:'',
        password:'',
       
  });
    const handleFormSubmit = () => {
        if(!formData.email || !formData.password) Alert.alert('Empty Fields', 'Please fill in all the fields', [
            {
                text:'Cancel'
            }
        ])
        Login(formData);
}

    const handleEmailChange =(text) => setFormData({...formData, email:text});
    const handlePasswordChange =(text) => setFormData({...formData, password:text});
    return (
        <View style={styles.container}>
              <View style={styles.header}>
                      <Text style={styles.headerText}>
                            Welcome !
                      </Text>
              </View>
              <View style={styles.footer}>
                  <View style={styles.textInputContainer}>
                      <Text style={styles.text}>E-mail</Text>
                      <View style={styles.textInput}>
                         <MaterialCommunityIcons name="email" size={22} color="grey" /> 
                         <TextInput 
                            placeholder='Your Email' style={styles.input}
                            onChangeText={handleEmailChange}
                            />
                      </View>
                  </View>
                  <View style={styles.textInputContainer}>
                      <Text style={styles.text}>Password</Text>
                      <View style={styles.textInput}>
                         <Ionicons name="md-lock-closed" size={22} color="grey" />
                         <TextInput 
                            placeholder='Your Password' 
                            style={styles.input} 
                            secureTextEntry={true}
                            onChangeText={handlePasswordChange}
                            />
                      </View>
                  </View>
                  <View style={styles.textInputContainer}>
                      <TouchableOpacity>
                             <Text style={[styles.text, {color:'#15617d', marginTop:10}]}>Forgot Passsword ? </Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.textInputContainer}>
                      <TouchableOpacity  
                          style={[styles.button, {backgroundColor:'#15617d'}]}
                          onPress={handleFormSubmit}
                          >
                             <Text  style={[styles.buttonText,{color:'#fff'}]}>Login</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.textInputContainer}>
                      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={[styles.button, {backgroundColor:'white', borderColor:'#15617d', borderWidth:1}]}>
                             <Text style={[styles.buttonText, {color:'#15617d'}]}>Sign Up</Text>
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
        backgroundColor:"#15617d"
    },
    headerText: {
        fontSize:28,
        color:'white',
        fontWeight:"bold",
        paddingVertical:2
    },
    header: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:30,
    },
    footer: {
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    textInputContainer:{
        marginTop:14,
    },
    textInput: {
        flexDirection:'row',
        marginTop:14,
    },
    input: {
        marginLeft:10,
        borderBottomWidth:1,
        flex:1,
        paddingVertical:4,
        paddingHorizontal:4,
        borderBottomColor:'grey'
    },
    text: {
        marginVertical:4,
        fontSize:18,
        fontWeight:'bold',
        color:'grey',
    },
    button: {
        paddingHorizontal:10,
        paddingVertical:14,
        borderRadius:10,
        alignItems:'center'
    },
    buttonText: {
        fontSize:18,
        fontWeight:'bold'
    }
})

export default LoginInScreen;
