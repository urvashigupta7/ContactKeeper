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
export default (state,action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts:[action.payload,...state.contacts]
            };
        case GET_CONTACTS:
            return{
                ...state,
                contacts:action.payload,
                loading:false
            }
         case DELETE_CONTACT:
                return{
                    ...state,
                    contacts:state.contacts.filter(contact=>contact._id!==action.payload)
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
        case UPDATE_CONTACT:
                return{
                    ...state,
                    contacts:state.contacts.map(contact=>contact.id===action.payload.id ?action.payload:contact
                    )
                }
        case CLEAR_FILTER:
            return{
                ...state,
                filtered:null
            }
        
        case FILTER_CONTACTS:
            return{
                ...state,
                filtered:state.contacts.filter((contact)=>{
                 const regex=new RegExp(`${action.payload}`,'gi')
                 return contact.name.match(regex)||contact.email.match(regex)||contact.phone.match(regex)
                })
            }
        case CONTACT_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case CLEAR_ERRORS:{
            return {
                ...state,
                error:null
            }
        }
        case CLEAR_CONTACTS:
            return{
                ...state,
                loading:true,
                contacts:[]
            }
        default:
            return state

    }
}