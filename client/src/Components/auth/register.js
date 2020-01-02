import React,{useState,useContext} from 'react';
import AlertContext from '../../context/alert/alertContext'
const Register=()=>{
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const alertContext=useContext(AlertContext);
    const{name,email,password,password2}=user;
    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault();
         if(password2!==password){
         alertContext.setAlert('Passwords do not match','danger')
        }
        console.log('submit');
    }
    return(
        <div className='form-container'>
          <h1>
              Account <span className='text-primary'>Register</span>
          </h1>
          <form onSubmit={onSubmit}>
              <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' value={name} onChange={onChange} required/>
                  <label htmlFor='email'>Email Address</label>
                  <input type='email' name='email' value={email} onChange={onChange} required/>
                  <label htmlFor='password'>Password</label>
                  <input type='password' name='password' value={password} minLength='6' onChange={onChange} required />
                  <label htmlFor='password2'> Confirm Password</label>
                  <input type='password' name='password2' value={password2} minLength='6' onChange={onChange} required/>
                  
              </div>
              <input type='submit' value='Register'className='btn btn-block btn-primary' />
          </form>
        </div>
    )
}
export default Register;