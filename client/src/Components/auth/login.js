import React,{useState,useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
const Login=(props)=>{
    const authContext=useContext(AuthContext);
    const alertContext=useContext(AlertContext);
    const [user,setUser]=useState({
    
        email:'',
        password:'',
        
    })
    
    const{email,password}=user;
    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        authContext.loginUser({
            email,
            password
        });
        
    }
    useEffect(()=>{
        if(authContext.isAuthenticated){
            props.history.push('/');
        }
        if(authContext.error==='Login Fail'){
            alertContext.setAlert(authContext.error,'danger');
            authContext.clearError();
        }
        //eslint-disable-next-line
    },[authContext.error,authContext.isAuthenticated,props.history])
    return(
        <div className='form-container'>
          <h1>
              Account <span className='text-primary'>Login</span>
          </h1>
          <form onSubmit={onSubmit}>
              <div className='form-group'>
                 
                  <label htmlFor='email'>Email Address</label>
                  <input type='email' name='email' value={email} onChange={onChange} required/>
                  <label htmlFor='password'>Password</label>
                  <input type='password' name='password' value={password} onChange={onChange} required/>     
              </div>
              <input type='submit' value='Login'className='btn btn-block btn-primary' />
          </form>
        </div>
    )
}
export default Login;