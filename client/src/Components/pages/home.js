import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/contactform';
import ContactFilter from '../contacts/contactfilter'
const Home=()=>{
    return(
  <div className="grid-2">
      <div>
       <ContactForm/>
      </div>
      <div>
          <ContactFilter/>
          <Contacts/>
      </div>
     
  </div>
    )
}
export default Home;