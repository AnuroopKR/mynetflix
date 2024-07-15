import React, { useEffect,useDispatch} from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import auth from '../utils/firebase'
const Body = () => {
  const dispatch=useDispatch()
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;

        } else {

        }
      });
     },[])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
