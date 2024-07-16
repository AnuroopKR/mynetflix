import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import auth from '../utils/firebase'

const Login = () => {
  const[isSigninForm,setSigninForm]=useState(true)
  const[errorMessage,setErrorMessage]=useState(null)
  const name=useRef(null)
  const email=useRef(null);
  const password=useRef(null)

  const handleButtonClick=()=>{
    const message=checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)
    console.log(message);
    if(message!==null){
      return;
    } 
    if (!isSigninForm) {
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user
updateProfile(auth.currentUser, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  dispatch(addUser({uid:uid,email:email,displayName:displayName}))

  // Profile updated!
  // ...
}).catch((error) => {
  setErrorMessage(error.message)
  // An error occurred
  // ...
});
    console.log("user",user);
    // navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+','+errorMessage)
    // ..
  });

    }else{

      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // navigate("/browse")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+','+errorMessage)
  });

    }
  }
  


  const toggleSigninForm=()=>{
    setSigninForm(!isSigninForm)
  }
  return (
    <div >
      
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg" alt="" />
      </div>
      <Header/>
      
      <form onSubmit={(e)=>e.preventDefault()} action="" className='py-12 px-10 w-80 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-75'>
        <h1 className='font-bold text-3xl py-4'>{isSigninForm?"Sign In":"Sign Up" }</h1>
        {!isSigninForm&&(<input 
          ref={name}
          type="text" 
          placeholder='Name' 
          className='p-2 my-3 w-full bg-gray-600 rounded-md bg-opacity-70 border-[.05px] border-slate-400'
          />)}
        <input 
        ref={email}
          type="text" 
          placeholder='email address' 
          className='p-2 my-3 w-full bg-gray-600 rounded-md bg-opacity-70 border-[.05px] border-slate-400'
          />
        <input 
        ref={password}
          type="password" 
          placeholder='password' 
          className='p-2 my-3 w-full bg-gray-600 rounded-md bg-opacity-70 border-[.05px] border-slate-400 '
          />
          <p className='text-red-500'>{errorMessage}</p>
        <button className='p-2 my-6 bg-red-700 w-full rounded-md ' onClick={handleButtonClick}>{isSigninForm?"Sign In":"Sign Up" }</button>
        <p className='cursor-pointer' onClick={toggleSigninForm}>{isSigninForm?"Allready have an account? Sign In":"New to Netflix? Sign up now" }</p>
      </form>
      </div>
  )
}

export default Login
