import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import "./index.css"
import Cookies from 'js-cookie'

const Login = () => {
  const navigate=useNavigate()
    const [data,setData]=useState({username:"",password:""})
    const[isSubmitFailure,setIsSubmitFailure]=useState(false)
    const onChangeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
        
    }
    const submitSuccess=jwtToken=>{
      Cookies.set("jwt_token",jwtToken,{expires:30})

     navigate("/")
    }
    const submitFailure=()=>{
      setIsSubmitFailure(true)
    }
    const onSubmitHandler= async e=>{
      e.preventDefault();
     
      const url="https://apis.ccbp.in/login"
      const options={
        method:"POST",
        body:JSON.stringify(data)
      }
      const response=await fetch(url,options)
      console.log(response)
      const userData=await response.json()
      console.log(userData)
      if(response.ok===true){
        submitSuccess(userData.jwt_token)
      }else{
        submitFailure()
      }

    }
   const JWTTOKEN=Cookies.get("jwt_token")
   if(JWTTOKEN !== undefined){
    return navigate("/")
   }
  return (
    <div className='login-container'>
        

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
       
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        
        

     

      
         <form className='form-container' onSubmit={onSubmitHandler}>
         <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-img"
            alt="website logo"/><br/>
            <label>USERNAME:</label>
            <input type='text' className='user-input' name='username' onChange={onChangeHandler} placeholder='Username' /><br/>
            <label>PASSWORD:</label>
            <input type='password' className='user-input' name='password' onChange={onChangeHandler} placeholder='Password' /><br/>
           
            <input type='submit' value="Login" className='button'/>
            {isSubmitFailure && <p className='err-msg'>*Invalid username or password</p>}
         </form>
         </div>
        

        
  )
}

export default Login