import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const[isSigninForm,setSigninForm]=useState(true)
  const toggleSigninForm=()=>{
    setSigninForm(!isSigninForm)
  }
  return (
    <div >
      
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg" alt="" />
      </div>
      <Header/>
      
      <form action="" className='py-12 px-10 w-80 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-75'>
        <h1 className='font-bold text-3xl py-4'>{isSigninForm?"Sign In":"Sign Up" }</h1>
        {!isSigninForm&&(<input 
          type="text" 
          placeholder='Name' 
          className='p-2 my-3 w-full bg-gray-600 rounded-md bg-opacity-70 border-[.05px] border-slate-400'
          />)}
        <input 
          type="text" 
          placeholder='email address' 
          className='p-2 my-3 w-full bg-gray-600 rounded-md bg-opacity-70 border-[.05px] border-slate-400'
          />
        <input 
          type="password" 
          placeholder='password' 
          className='p-2 my-3 w-full bg-gray-600 rounded-md bg-opacity-70 border-[.05px] border-slate-400 '
          />
        <button className='p-2 my-6 bg-red-700 w-full rounded-md '>{isSigninForm?"Sign In":"Sign Up" }</button>
        <p className='cursor-pointer' onClick={toggleSigninForm}>{isSigninForm?"Allready have an account? Sign In":"New to Netflix? Sign up now" }</p>
      </form>
      </div>
  )
}

export default Login
