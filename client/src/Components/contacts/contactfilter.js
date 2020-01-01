import React,{useContext,useRef,useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext'

const FilterContact=()=>{
    const contactContext=useContext(ContactContext);
    const text=useRef('')
    useEffect(()=>{
        if(contactContext.filtered===null){
            text.current.value='';
        }
    },[contactContext.filtered]);
    const onChange=(e)=>{
     if(text.current.value!==''){
         contactContext.filterContact(e.target.value)
     }
     else{
         contactContext.clearFiltered();
     }
    }
    return(
       <form>
           <input ref={text} type='text' placeholder='Filter Contacts...' onChange={onChange}/>
       </form>
    );
}
export default FilterContact