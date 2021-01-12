import React, {useReducer} from 'react';
import { cos } from 'react-native-reanimated';
import AuthReducer from './AuthReducer';
import AuthContext from './AuthContext';
import AsyncStorage from  '@react-native-community/async-storage';


let AppState;
const AuthState = (props) => {
    const initialState = {
        isLoading:true,
        userToken: null,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
   
    const setStorageToken =   async (email) => {
        try {
            await AsyncStorage.setItem('token', email);
        } catch (error) {
               console.log(error) ;
        }
    }

    const Login = (data) => {
       
        dispatch({type:'LOGIN', payload: data.email});     
    }

    const SignUp = (data) => {
        setStorageToken(data.email)
        dispatch({type:'SIGN_UP', payload: data.email});
    }

    const Logout =() => {
          dispatch({type:'LOGOUT'});
    }

    return (
           <AuthContext.Provider value={{
               isLoading:state.isLoading,
               userToken:state.userToken,
               Login,
               SignUp,
               Logout,

           }}>
                 {props.children}
           </AuthContext.Provider>
    )

}
export default AuthState;