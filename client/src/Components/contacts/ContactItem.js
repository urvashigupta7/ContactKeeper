import React from 'react';
import PropTypes from 'prop-types';
import Contacts from './Contacts';
const ContactItem=({contact})=>{
    return(
    <div className='card bg-light'>
        <h3 className='text-primary text-left'>
    {contact.name}{' '}<span style={{float:'right'}}className={'badge '+ (contact.type==='professional'?'badge-success':'badge-primary')}>{contact.type.charAt(0).toUpperCase()+contact.type.slice(1)}</span>
        </h3>
        <ul className='list'>
            {
contact.email&&(<li><i className='fas fa-envelope-open'></i> {contact.email}</li>)
            }
              {
contact.phone&&(<li><i className='fas fa-phone'></i> {contact.phone}</li>)
            }

        </ul>
            <p>
                <button className='btn  btn-dark btn-sm'>Edit</button>
                <button className='btn  btn-danger btn-sm'>Delete</button>

            </p>

    </div>
    )
}
ContactItem.propTypes={
contact:PropTypes.object.isRequired
}
export default ContactItem;