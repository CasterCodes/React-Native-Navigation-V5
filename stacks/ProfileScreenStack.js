
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ProfileScreen from '../screens/ProfileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ProfileStack = createStackNavigator();

 const ProfileScreenStack = ({navigation}) => {
    return (
        <ProfileStack.Navigator screenOptions={headerStyle}>
                <ProfileStack.Screen  name='Profile' component={ProfileScreen}
                options={{
                    headerLeft:() => {
                          return (
                            <MaterialCommunityIcons name="menu" size={24} color='white' 
                            onPress={() => navigation.openDrawer()}
                            /> 
                          )
                    }
                }}
                />
        </ProfileStack.Navigator>
    )
}
const headerStyle =  {
    headerStyle: {
      backgroundColor:"coral",
      
    },
    headerTintColor:"#eee",
  
    headerTitleStyle: {
         fontWeight:'bold',
         justifyContent:'center',
         alignItems:'center'
    }
  }

export default ProfileScreenStack;
