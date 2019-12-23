import React from 'react';
import './App.css';
import Navbar from './Components/layout/navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Components/pages/home';
import About from './Components/pages/about';
import ContactState from './context/contact/ContactState';

const App=()=> {
  return (
    <ContactState>
    <Router>
    <div className="App"> 
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    </div>
    </Router>
    </ContactState>
  );
}

export default App;
