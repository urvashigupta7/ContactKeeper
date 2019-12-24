import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER
} from '../types';
export default (state,action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts:[...state.contacts,action.payload]
            };
         case DELETE_CONTACT:
                return{
                    ...state,
                    contacts:state.contacts.filter(contact=>contact.id!==action.payload)
                }
         case SET_CURRENT:
           return{
               ...state,
               currentval:action.payload
           }
        case CLEAR_CURRENT:
            return{
                ...state,
                currentval:null
            } 
        default:
            return state

    }
}