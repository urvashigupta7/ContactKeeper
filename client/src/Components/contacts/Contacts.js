import React,{Fragment,useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
const Contacts=()=>{
    const contactContext=useContext(ContactContext);
    const mycontacts=contactContext.contacts;
return(
<Fragment>
    {
mycontacts.map((contact)=>(<ContactItem key={contact.id} contact={contact}/>))
    }
</Fragment>
)
}
export default Contacts;