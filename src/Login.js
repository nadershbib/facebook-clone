import React from 'react';
import './Login.css';
import {fbLogo,fbWordLogo} from './facebbok-logo'
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase'
import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'
function Login() {
   
  const {SET_USER} = actionTypes;  
  const[{},dispatch] = useStateValue();

  const signIn = ()=>{
 auth.signInWithPopup(provider).then(result=>{
     dispatch({type:SET_USER,user:result.user})
      
 }).catch(err=>console.log(err.message))

  }



    return (
        <div className="login">
            <div className="login__logo">
              <img src={fbLogo} alt=""/>
      
              <img src={fbWordLogo} alt=""/>

     

            </div>

           <Button type="submit" onClick={signIn}>
               Sign in
           </Button>
        
 


        </div>
    )
}

export default Login
