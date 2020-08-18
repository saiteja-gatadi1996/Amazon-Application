import React, { useState } from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase";

function Login() {
    const history=useHistory();
    const[email, setEmail]=useState('')
    const[password, setPassword]= useState('')
    const login=(e)=>{
        e.preventDefault(); //this stops the refresh
auth.signInWithEmailAndPassword(email, password)
.then((auth)=>{
    //logged in, redirect to homepage
    history.push('/');
})
.catch((event)=>alert(event.message))
    }


    
    const register=(e)=>{
        e.preventDefault(); //this stops the refresh
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //created a user and logged in, redirect to homepage
            history.push('/');
        })
        .catch((event)=>alert(event.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo"
            src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

        <div className="login__container">
        <h1>Sign in</h1>
        <form>
        <h5>E-mail</h5>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
        <h5>Password</h5>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
        <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
       </form>
        <p> By signing-in, you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our cookies Notice and our interest-Based Ads Notice</p>

        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </div>

        </div>
    )
}

export default Login
