import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo,useContext, useReducer}from  'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import MainTab from './tabs/MainTab';
import SplashScreen from './screens/SplashScreen';
import RootScreenStack from './stacks/RootStack';
import AuthContext from './components/context/AuthContext';
import DrawerContent from './components/Drawer/DrawerContent';
import AuthState from './components/context/AuthState';
import AsyncStorage from '@react-native-community/async-storage';
import AuthReducer from './components/context/AuthReducer';


import { set } from 'react-native-reanimated';
import { State } from 'react-native-gesture-handler';

const Drawer  = createDrawerNavigator();
const App = (props) => {
  const initialState = {
    isLoading:true,
    userToken: null,
}

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      console.log(state.isLoading, state.userToken)
      setTimeout(() => {
              setIsLoading(false)
      }, 8000);
      }, []);
    const Login =  async (data) => {
       try {
         await AsyncStorage.setItem('token', data.email);
       } catch(error) {
              console.log(error)
       }
        dispatch({type:'LOGIN', payload: data.email});     
    }

    const SignUp =  async (data) => {
      try {
        await AsyncStorage.setItem('token', data.email);
      } catch(error) {
             console.log(error)
      }
       dispatch({type:'SIGN_UP', payload: data.email});
    }

    const Logout = async () => {
          try {
               await AsyncStorage.removeItem('token');
          } catch (error) {
                console.log(error);
          }
          dispatch({type:'LOGOUT'});
    }
    if(isLoading) {
      return (<SplashScreen /> )
    }
    return(
     <AuthContext.Provider  value={{
      isLoading:state.isLoading,
      userToken:state.userToken,
      Login,
      SignUp,
      Logout,

      }}> 
          <NavigationContainer>
                  {
                      state.userToken ? ( 
                      <Drawer.Navigator drawerContent={(props) => <DrawerContent  {...props}/>}>
                        <Drawer.Screen name='Main' component={MainTab} />
                      </Drawer.Navigator>) : 
                      ( 
                          <RootScreenStack/>
                      )
                  }
            
          </NavigationContainer>
     </AuthContext.Provider>
        
    )
}

export default App;