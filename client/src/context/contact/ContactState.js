import React,{useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER
} from '../types';
import contactContext from './contactContext';
const ContactState=(props)=>{
    const initialState={
        contacts:[
            {
                id:1,
                name:'urvashi',
                email:'urvashi072000@gmail.com',
                phone:'8076249691',
                type:'personal'
            },
            {
                id:2,
                name:'bhoomik',
                email:'bhoomik072000@gmail.com',
                phone:'8076249691',
                type:'personal'
            },
        ],
        currentval:null
    };
    const[state,dispatch]=useReducer(ContactReducer,initialState);
    const addContact=(contact)=>{
      contact.id=uuid.v4();
      dispatch({type:ADD_CONTACT,payload:contact})
    }
    const deleteContact=(id)=>{
      dispatch({type:DELETE_CONTACT,payload:id})
    }
    const setCurrent=(contact)=>{
      dispatch({type:SET_CURRENT,payload:contact})
    }
    const clearCurrent=()=>{
      dispatch({type:CLEAR_CURRENT})
    }
  
    return (
        <ContactContext.Provider
          value={{
            contacts: state.contacts,
            addContact,
            deleteContact,
            currentval:state.currentval,
            setCurrent,
            clearCurrent
            
          }}
        >
          {props.children}
        </ContactContext.Provider>
      );
}
export default ContactState;