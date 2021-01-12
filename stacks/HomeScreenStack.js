import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();
 
const HomeScreenStack = ({navigation}) => {
    return (
        <HomeStack.Navigator screenOptions={headerStyle} >
                <HomeStack.Screen  name='Home' component={HomeScreen} options={{
                    headerLeft:() => {
                          return (
                            <MaterialCommunityIcons name="menu" size={24} color='white' 
                            onPress={() => navigation.openDrawer()}
                            /> 
                          )
                    }
                }}/>
        </HomeStack.Navigator>
    )
}
const headerStyle =  {
    headerStyle: {
      backgroundColor:"#009387",
      
    },
    headerTintColor:"#eee",
  
    headerTitleStyle: {
         fontWeight:'bold',
         justifyContent:'center',
         alignItems:'center'
    }
  }
export default HomeScreenStack;