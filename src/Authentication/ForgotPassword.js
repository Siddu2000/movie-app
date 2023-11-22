import React, { useState } from 'react'
import { useRef } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const ForgotPassword = () => {
  const emailRef=useRef();
  const [error,setError]=useState("");
  const [message,setMessage]=useState();
  const [loading,setLoading]=useState(false);
 const {reset}=useAuth();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
        setError("")
        await reset(emailRef.current.value)
        setMessage("rest password link sended to the register mail");
        setLoading(true)
    } catch (error){
      setError(error.message);
     
    }

    setLoading(false)
  }

  return (
    <div> <div className="text-white text-center text-xl">Forgot Password</div>
    <h1 className='text-red-700 text-center'>{error && error}</h1>
    <h1 className='text-green-700 text-center'>{message&&message}</h1>
    <form onSubmit={handleSubmit} className='flex-col text-slate-50 max-w-[20rem] m-auto gap-y-3 '>
      <div className='flex flex-col'>
        <label htmlFor="username">Email: </label>
        <input type="email" name="email" ref={emailRef} className='text-gray-900'></input>
      </div>
    <h1 className='text-center'><NavLink to="/Login">Login</NavLink></h1>
      <button disabled={loading}  className='m-auto bg-blue-400 mt-6 ml-24 mb-2 rounded'>Reset Password</button>
    </form>
    </div>
  )
}

export default ForgotPassword