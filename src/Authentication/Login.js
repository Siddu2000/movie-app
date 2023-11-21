import React, { useState } from 'react'
import { useRef } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const emailRef=useRef();
  const passwordRef=useRef();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
 const {login}=useAuth();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/logout");
    } catch (error){
      setError(error.message);
      // setError("Invalid Login Credential Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div> <div className="text-white text-center text-xl">Login</div>
    <h1 className='text-red-700 text-center'>{error && error}</h1>
    <form onSubmit={handleSubmit} className='flex-col text-slate-50 max-w-[20rem] m-auto gap-y-3 '>
      <div className='flex flex-col'>
        <label htmlFor="username">Email: </label>
        <input type="email" name="email" ref={emailRef} className='text-gray-900'></input>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="password">Password: </label>
        <input type="password"  ref={passwordRef} className='text-gray-900'></input>
      </div>
      <button disabled={loading}  className='m-auto bg-blue-400 mt-6 ml-24 mb-2 rounded'>SignIn</button>
      <NavLink to="/sign-up"> <h2 className='mb-16'>Create  an Account ? please SignUp</h2></NavLink>
    </form>
    </div>
  )
}

export default Login