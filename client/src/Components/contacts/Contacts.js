import React,{Fragment,useContext,useEffect} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/spinner.js'
const Contacts=()=>{
    const contactContext=useContext(ContactContext);
    const mycontacts=contactContext.contacts;
    useEffect(()=>{
        contactContext.getContacts();
        //eslint-disable-next-line
    },[])
    if(contactContext.loading){
        return <Spinner/>
    }
    if(mycontacts!==null&&mycontacts.length===0&&!contactContext.loading){
        return (<h4>No Contacts Found.Please Add Contact</h4>)
    }
 else{  
return(
<Fragment>
    <TransitionGroup>
    {
        contactContext.filtered!==null ? contactContext.filtered.map((contact)=>(
            <CSSTransition key={contact._id} timeout={1000} classNames='item'>
        <ContactItem  contact={contact}/>
        </CSSTransition>
        )) :
mycontacts.map((contact)=>(
    <CSSTransition key={contact._id} timeout={1000} classNames='item'>
<ContactItem contact={contact}/>
</CSSTransition>
))
    }
    </TransitionGroup>
</Fragment>
)
 }
}
export default Contacts;