import React,{Fragment,useContext} from 'react';
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
    {
        contactContext.filtered!==null ? contactContext.filtered.map((contact)=>(
        <ContactItem key={contact.id} contact={contact}/>
        )) :
mycontacts.map((contact)=>(<ContactItem key={contact.id} contact={contact}/>))
    }
</Fragment>
)
}
export default Contacts;