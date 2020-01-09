import React,{useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState=(props)=>{
    const initialState={
     token:localStorage.getItem('token'),
     isAuthenticated:null,
     loading:true,
     error:null,
     user:null
    };
    const[state,dispatch]=useReducer(AuthReducer,initialState);
    const registerUser=async(formData)=>{
         const config={
           headers:{
             'Content-Type':'application/json'
           }
         }
         try{
         const res= await axios.post('/api/users',formData,config)
        dispatch({type:REGISTER_SUCCESS,payload:res.data})
        loaduser()
         }catch(e){
           dispatch({type:REGISTER_FAIL,payload:'User already exists'})
         }
    }
    const clearError=()=>{
      dispatch({type:CLEAR_ERRORS})
    }
    const loaduser=async()=>{
      if(localStorage.token){
        setAuthToken(localStorage.token)
      }
      try{
         const res=await axios.get('/api/users');
         dispatch({type:USER_LOADED,payload:res.data})
      }catch(e){
       dispatch({type:AUTH_ERROR})
      }
    }
   const loginUser=async(formData)=>{
    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }
    try{
    const res= await axios.post('/api/users/login',formData,config)
   dispatch({type:LOGIN_SUCCESS,payload:res.data})
   loaduser()
    }catch(e){
      dispatch({type:LOGIN_FAIL,payload:'Login Fail'})
    }
   }
   const logout=()=>{
     dispatch({type:LOGOUT})
   }
    return (
        <AuthContext.Provider
          value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            error:state.error,
            user:state.user,
            registerUser,
            clearError,
            loaduser,
            loginUser,
            logout

            
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );
}
export default AuthState;