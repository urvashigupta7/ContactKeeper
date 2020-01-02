import React,{Fragment,useContext} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
const Contacts=()=>{
    const contactContext=useContext(ContactContext);
    const mycontacts=contactContext.contacts;
    if(mycontacts.length===0){
        return <h4>No Contacts Found.Please Add Contact</h4>
    }
return(
   
<Fragment>
    <TransitionGroup>
    {
        contactContext.filtered!==null ? contactContext.filtered.map((contact)=>(
            <CSSTransition key={contact.id} timeout={500} classNames='item'>
        <ContactItem  contact={contact}/>
        </CSSTransition>
        )) :
mycontacts.map((contact)=>(
    <CSSTransition key={contact.id} timeout={500} classNames='item'>
<ContactItem contact={contact}/>
</CSSTransition>
))
    }
    </TransitionGroup>
</Fragment>
)
}
export default Contacts;