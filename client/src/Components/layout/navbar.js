import React,{useContext,Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext';

const Navbar=(props)=>{
    const authContext=useContext(AuthContext)
    const {isAuthenticated,logout,user}=authContext;
    const authLinks=(
       <Fragment>
        <li>Hello, {user&& user.name}</li>
        <li>
            <a onClick={authContext.logout}href="#"><i className='fas fa-sign-out-alt'></i><span className='hide-sm'>Logout</span></a>
        </li>

       </Fragment>
    )
    const guestLinks=(
        <Fragment>
          <li>
              <Link to='/about'>About</Link>
          </li>
          <li>
              <Link to='/register'>Register</Link>
          </li>
          <li>
              <Link to='/login'>Login</Link>
          </li>
        </Fragment>
    )
return(
    <div className="navbar bg-primary">
        <h1>
            <i className={props.icon}/> {props.title}
        </h1>
      <ul>
        {isAuthenticated ?authLinks:guestLinks}
      </ul>
    </div>
)
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string
}
Navbar.defaultProps={
    title:'Contact Keeper',
    icon:'fas fa-id-card-alt'
}
export default Navbar;