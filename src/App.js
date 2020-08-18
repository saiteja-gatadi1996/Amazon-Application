import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./Header"
import Home from "./Home";
import Login from "./Login"
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const[{basket}, dispatch]= useStateValue();


  //piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user is logged in
        dispatch({
          type:"SET_USER",
          //authUser is what we get back..we are setting to "user" object
          user: authUser,
        })
      }else{
        //not logged in
        dispatch({
          type:"SET_USER",
          user: null,
        })
      }
    })
    

    return ()=>{
      unsubscribe();
    }
   
  }, []);

  //by default USER IS null
 // console.log("USER IS>>>", user);


  return (
    <Router>
     
    <div className="app">
    
    <Switch>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
       </Route>
      <Route path="/login">
     <Login/>
        </Route>
      <Route path="/">
      <Header/>
       <Home/>
      

        
        
        
        
        </Route>
     
    </Switch>
    </div>
    </Router>
  );
}

export default App;
