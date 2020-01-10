import React,{useReducer} from 'react';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import axios from 'axios';
import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    CONTACT_ERROR,
    CLEAR_ERRORS,
    CLEAR_CONTACTS,
    GET_CONTACTS
} from '../types';

const ContactState=(props)=>{
    const initialState={
        contacts:[],
        currentval:null,
        filtered:null,
        error:null,
        loading:true
    };
    const[state,dispatch]=useReducer(ContactReducer,initialState);
    const getContacts=async()=>{
      const res= await axios.get('/api/contacts');
      dispatch({type:GET_CONTACTS,payload:res.data});
    }
    const addContact=async(contact)=>{
      const config={
        headers:{
          'Content-Type':'application/json'
        }
      }
      try{
      const res= await axios.post('/api/contacts',contact,config)
     dispatch({type:ADD_CONTACT,payload:res.data})
      }catch(e){
        dispatch({type:CONTACT_ERROR,payload:'Failed To Add Contact'})
      }
    }
    const deleteContact=async(id)=>{
      const res= await axios.delete(`/api/contacts/${id}`)
      console.log(res.data)
      dispatch({type:DELETE_CONTACT,payload:id})
    }
    const setCurrent=(contact)=>{
      dispatch({type:SET_CURRENT,payload:contact})
    }
    const clearCurrent=()=>{
      dispatch({type:CLEAR_CURRENT})
    }
    const updateContact=async(contact)=>{
      const config={
        headers:{
          'Content-Type':'application/json'
        }
      }
      await axios.put(`/api/contacts/${contact._id}`,contact,config)
      dispatch({type:UPDATE_CONTACT,payload:contact})
    }
    const filterContact=(text)=>{
      dispatch({type:FILTER_CONTACTS
      ,payload:text})
    }
    const clearFiltered=()=>{
      dispatch({type:CLEAR_FILTER})
    }
    const clearError=()=>{
      dispatch({type:CLEAR_ERRORS})
    }
    const clearContact=()=>{
      dispatch({type:CLEAR_CONTACTS})
    }
  
    return (
        <ContactContext.Provider
          value={{
            contacts: state.contacts,
            error:state.error,
            filtered:state.filtered,
            loading:state.loading,
            addContact,
            deleteContact,
            currentval:state.currentval,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContact,
            clearFiltered,
            clearError,
            clearContact,
            getContacts


            
          }}
        >
          {props.children}
        </ContactContext.Provider>
      );
}
export default ContactState;