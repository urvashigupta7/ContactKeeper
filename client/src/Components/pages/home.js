import React,{useEffect} from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/contactform';
import ContactFilter from '../contacts/contactfilter'
import AuthContext from '../../context/auth/authContext';
import { useContext } from 'react';
const Home=()=>{
    const authContext=useContext(AuthContext);
    useEffect(()=>{
      authContext.loaduser();
      //eslint-disable-next-line
    },[])
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