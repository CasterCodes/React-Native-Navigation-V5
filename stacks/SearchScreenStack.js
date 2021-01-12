import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchStack = createStackNavigator();

const SearchScreenStack = ({navigation}) => {
    return (
       <SearchStack.Navigator screenOptions={headerStyle} >
              <SearchStack.Screen name="Search"  component={SearchScreen} options={{
                    headerLeft:() => {
                          return (
                            <MaterialCommunityIcons name="menu" size={24} color='white' 
                            onPress={() => navigation.openDrawer()}
                            /> 
                          )
                    }
                }}/>
       </SearchStack.Navigator>
    )
}
const headerStyle =  {
    headerStyle: {
      backgroundColor:"green",
      
    },
    headerTintColor:"#eee",
  
    headerTitleStyle: {
         fontWeight:'bold',
         justifyContent:'center',
         alignItems:'center'
    }
  }

export default SearchScreenStack
