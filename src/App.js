import React ,{useState,useEffect}from 'react';
import {useHistory} from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import Location from './components/Location';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import About from './components/About';

import { BrowserRouter as Router,Switch,Route } from "react-router-dom"; 




import './App.css';

function App() {
  //const history = useHistory();
//const[user, setLoginUser] = useState({})


  return (

<div className="App">
  <Router>

 
      
      <Switch>
     
     
  

    <Route path="/Location">
          <Location/>
  
        </Route>

        <Route path="/SignUp">
          <Menu/>
          <SignUp/>
        </Route>
  

        <Route exact path="/">
        
        <Menu/>
       
      

        <Home/>
       
       
   
       </Route>


        <Route path="/SignIn">
        <Menu/>
          <SignIn 
         
         />
        </Route>

        <Route path="/About">
          <About/>
        </Route>
     
       

        
       
    
  
  
      </Switch>


  </Router>

  
    


    </div>

    
    
  );
}

export default App;



   //{
      
   // user && user._id ? <Home /> : <SignIn setLoginUser={setLoginUser}/>

  //}


  //SignIn setLoginUser={setLoginUser}