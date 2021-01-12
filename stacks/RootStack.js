import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootScreen from '../screens/RootScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginInScreen from '../screens/LoginInScreen';


const RootStack =  createStackNavigator();

const RootScreenStack = () => {
    return (
      <RootStack.Navigator initialRouteName='RootScreen'>
             <RootStack.Screen name='RootScreen' component={RootScreen} options={{
                 title:'',
                 headerShown:false
             }} />
             <RootStack.Screen name='Login' component={LoginInScreen} options={{
                 headerShown:false,
                 title:'Login In',
             }} />
              <RootStack.Screen name='SignUp' component={SignUpScreen} options={{
                 headerShown:false,
                 title:'Sign Up',
             }} />
              
            
      </RootStack.Navigator>
    )
}

export default RootScreenStack;
