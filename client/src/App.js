import React from 'react';
import './App.css';
import Navbar from './Components/layout/navbar';
import Alert from './Components/layout/alerts';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Components/pages/home';
import About from './Components/pages/about';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './Components/auth/register'
import Login from './Components/auth/login'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './Components/Routing/privateroute'


const App=()=> { 
  if(localStorage.token){
    setAuthToken(localStorage.token)
  }
  return (
    <AuthState>
    <ContactState>
      <AlertState>
    <Router>
    <div className="App"> 
      <Navbar/>
      <div className='container'>
        <Alert/>
        <Switch>
          <PrivateRoute exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    </div>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
