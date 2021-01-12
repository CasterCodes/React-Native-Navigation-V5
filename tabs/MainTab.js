import React from 'react';

import HomeScreenStack from '../stacks/HomeScreenStack';
import ProfileScreenStack from '../stacks/ProfileScreenStack';
import SearchScreenStack from '../stacks/SearchScreenStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const MainTab = () => {
       return(
              <Tab.Navigator activeColor="#fff" shifting={true} screenOptions={{
                    
              }}>
                   <Tab.Screen name='HomeTab' component={HomeScreenStack}
                        options={{
                           
                            tabBarLabel:"Home",
                            tabBarColor:"#009387",
                            tabBarIcon:({color}) => {
                                return(
                                  <MaterialCommunityIcons name="home" size={24} color={color} />   
                                )
                            }
                        }}
                   />
                   <Tab.Screen name='ProfileTab' component={ProfileScreenStack}
                       options={{
                          
                            tabBarLabel:"Profile",
                            tabBarColor:"coral",
                              tabBarIcon:(({color}) => {
                               
                                    return(
                                        <MaterialCommunityIcons name="face-profile" size={24} color={color} />
                                    )
                              })
                       }}
                   />
                   <Tab.Screen name='SaerchTab' component={SearchScreenStack} options={{
                           tabBarLabel:"Search",
                           tabBarColor:'green',
                           tabBarIcon:(({color}) => {
                                  return(
                                    <Ionicons name="search" size={24} color={color} />
                                  )
                           })
                   }}/>
              </Tab.Navigator>
       )
}

export default MainTab;