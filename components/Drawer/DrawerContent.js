import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';
import AuthContext from '../../components/context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Text, Avatar, Paragraph, Caption, Drawer, TouchableRipple, Switch} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
const DrawerContent = (props) => {
    const authContext =  useContext(AuthContext);
    const {Logout} = authContext;
    return (
        <View style={{flex: 1}}>
                <DrawerContentScrollView {...props}>
                     <View style={styles.userInfoSection}>
                            <View style={styles.userProfile}>
                                <Avatar.Image
                                   size={50}
                                   source={{uri:'https://randomuser.me/api/portraits/men/3.jpg'}}

                                 />
                                  <View style={{marginLeft:10}}>
                                        <Paragraph style={{fontSize:22, fontWeight:'bold'}}>
                                            <Text>  Kevin Caster</Text>
                                        </Paragraph>
                                        <Caption style={{fontSize:16, fontWeight:'bold', marginTop:4}}>
                                           <Text> @CasterKno</Text>
                                        </Caption>
                                 </View>
                            </View>
                     </View>
                     <Drawer.Section style={{marginTop:20}}>
                         <DrawerItem
                            label='Home'
                            icon={() => {
                                  return (
                                    <MaterialCommunityIcons name="home" size={24} color='grey'
                                    /> 
                                  )
                            }}
                            onPress={() => props.navigation.navigate('HomeTab', {
                                  screen:'Home', 
                            })}
                         />

                     </Drawer.Section>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                         label= 'Logout'
                         icon={() => {
                               return (
                                <AntDesign name="logout" size={24} color="black" />
                               )
                         }}
                         onPress={Logout}
                        />
                </Drawer.Section>
            
        </View>
    )
}


const styles = StyleSheet.create({
    userInfoSection: {
        marginTop:20,
        paddingHorizontal:10,
        borderBottomColor:'#009387',
        paddingVertical:10,
        borderBottomWidth:0.5,
    }, 
    userProfile: {
           flexDirection:'row'
    },
      bottomDrawerSection: {
          marginBottom:4,
          borderTopWidth:1,
          borderTopColor:'#009387',
      }

})

export default DrawerContent
