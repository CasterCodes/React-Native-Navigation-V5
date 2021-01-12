import React, {useState} from 'react';
 
import {View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {Text,Avatar, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper'



const DrawerContent = (props) => {
      const [isDarkTheme, setIsDarkTheme] = useState(false);
      const toggleTheme = () => {
                setIsDarkTheme(!isDarkTheme);
      };
      return (
          <View style={{flex:1}}> 
                 <DrawerContentScrollView {...props}>
                         <View style={styles.drawerContent}>
                             <View style={styles.userInfoSection}>
                                 <View style={{flexDirection:"row", marginTop:15}}>
                                       <Avatar.Image 
                                       source={{
                                           uri:"https://randomuser.me/api/portraits/men/1.jpg"
                                        }}
                                        size={50}
                                        />
                                        <View style={{marginLeft:15}}>
                                              <Text style={styles.title}>Kevin Caster</Text>
                                              <Caption style={styles.caption}>CasterCodes</Caption>
                                        </View>
                                 </View>
                                 <View style={styles.row}>
                                     <View style={styles.section}>
                                         <Paragraph style={[styles.paragraph, styles.caption]}> 80</Paragraph>
                                         <Caption style={styles.caption}>Following</Caption>
                                     </View>
                                     <View style={styles.section}>
                                         <Paragraph style={[styles.paragraph, styles.caption]}> 120</Paragraph>
                                         <Caption style={styles.caption}>Followers</Caption>
                                     </View>

                                 </View>
                             </View>
                             <Drawer.Section style={styles.drawerSection} tite='Settings'>
                             <DrawerItem
                              icon={(color, size) => {
                                    return(
                                        <MaterialCommunityIcons name="home" size={28} color='black'
                                        /> 
                                    )
                              }}
                              onPress={() => {
                                props.navigation.navigate('Home')
                            }}
                              label='Home'
                            />
                           <DrawerItem
                              icon={() => {
                                    return(
                                        <MaterialCommunityIcons name="account-circle-outline" size={28} color='black'
                                         /> 
                                    )
                              }}
                              label='Profile'
                              onPress={() => {
                                props.navigation.navigate(' Details')
                            }}
                            />
                           <DrawerItem
                              icon={() => {
                                    return(
                                        <MaterialCommunityIcons name="bookmark-outline" size={28} color='black'
                                         /> 
                                    )
                              }}
                              label='Book Marks'
                            />
                           <DrawerItem
                              icon={() => {
                                    return(
                                        <MaterialCommunityIcons name="account-settings-outline" size={28} color='black'
                                         /> 
                                    )
                              }}
                              label='Settings'
                            />
                           <DrawerItem
                              icon={() => {
                                    return(
                                        <MaterialCommunityIcons name="account-cog-outline" size={24} color='black'
                                         /> 
                                    )
                              }}
                              label='Support'
                             />
                             </Drawer.Section>
                             <Drawer.Section title='Prefarences'>
                                       <TouchableRipple onPress={()=> {toggleTheme()}}>
                                             <View style={styles.preferance}>
                                                   <Text>Dark Theme</Text>
                                                   <View>
                                                       <Switch value={isDarkTheme}/> 
                                                   </View>
                                                  
                                             </View>
                                       </TouchableRipple>
                             </Drawer.Section>
                         </View>
                 </DrawerContentScrollView>
                 <Drawer.Section style={styles.bottonDrawerSection}>
                         <DrawerItem
                              icon={() => {
                                    return(
                                        <MaterialCommunityIcons name="logout" size={24} color='black'
                                        onPress={() => {}} /> 
                                    )
                              }}
                              label='Sign Out'
                         />
                 </Drawer.Section>
          </View>
      )
}
const styles = StyleSheet.create({
    drawerContent: {
          flex:1,
    },
    userInfoSection: {
           paddingLeft:20
    },
    caption: {
        fontSize:14,
        lineHeight:14,
    },
    title: {
        fontSize:16,
        marginTop:3,
        fontWeight:"bold"
    },
    paragraph: {
        fontWeight:"bold",
        marginRight:3,
    },
    drawerSection:{
          marginTop:15
    },
    row: {
        flexDirection:"row",
        alignItems:'center',
        marginTop:20,
    },
    section: {
       flexDirection:"row",
       alignItems:'center',
       marginRight:15,
    },
    bottonDrawerSection: {
          borderTopWidth:1,
          borderTopColor:"#f4f4f4",
          marginBottom:15,
    },
    preferance: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:16,
        paddingVertical:12,
    }
})

export default DrawerContent;