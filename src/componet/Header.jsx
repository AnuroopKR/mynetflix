import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import profile from '../assets/profile_img.png'
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

import { addUser, removeUser } from '../utils/userSlice'


const Header = () => {


  const navigate=useNavigate();
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log("error",error);
      // An error happened.
    });
  }

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate('/browse')
        } else {
          dispatch(removeUser())
          navigate('/')
        }
      });
     },[])
  return (
    <div className='absolute w-screen px-32 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img 
      className='w-48' 
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
      {user&&(
        <div className='flex '>
        <img className='w-11 h-11 m-4' src={profile} alt="" />
        <button className='text-white' onClick={handleSignOut}>Sign Out</button>
      </div>
    )}
    </div>
  )
}

export default Header
