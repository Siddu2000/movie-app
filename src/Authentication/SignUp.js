import React,{useRef, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
const SignUp = () => {
  const navigate=useNavigate();
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirm=useRef();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  
const {signup,currentUser}=useAuth();
 async function handleSubmit(e){
e.preventDefault();

   
  try {
    setError("")
    setLoading(true);
    await signup(emailRef.current.value, passwordRef.current.value);
    navigate("/login")

    } catch (error){
      setError(error.message);
      }
      setLoading(false);
      };
  return (
    <div>
    <div className="text-white text-center text-xl">SignUp</div>
    <h1 className='text-slate-300 text-center'>{error && error}</h1>
    <form onSubmit={handleSubmit} className='flex-col text-slate-50 max-w-[20rem] m-auto gap-y-3 '>
      <div className='flex flex-col'>
        <label htmlFor="username">Email: </label>
        <input type="email" name="email" ref={emailRef} className='text-gray-900'></input>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="password">Password: </label>
        <input type="password"  ref={passwordRef} className='text-gray-900'></input>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="confirmPassword">ConfirmPassword: </label>
        <input type="password"  ref={passwordConfirm} className='text-gray-900'></input>
        

      </div>
      <button disabled={loading} className='m-auto bg-blue-400 mt-6 ml-24 mb-2 rounded'>SignUp</button>
      <NavLink to="/login"> <h2 className='mb-16'>Already have an Account ? please Login </h2></NavLink>
    </form>
    </div>
  )
}

export default SignUp

