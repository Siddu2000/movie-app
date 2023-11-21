import React,{useState} from 'react'
import {NavLink,useNavigate} from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
    const [error, setError] = useState("")
    const [loading,setLoading]=useState();
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();

  
    async function handleLogout() {
      setError("");
      setLoading(true);
  
      try {
        await logout()
        navigate("/login")
      } catch {
        setError("Failed to log out")
      }
    }
  
  return (
    <div className='flex flex-col text-center text-zinc-50'>
        <h1 >{error && error}</h1>
<h1 className='text'>Email: {currentUser?.email}</h1> 
<button disabled={loading} onClick={handleLogout} className='m-auto bg-blue-400 mt-6 ml-92 mb-2 rounded'>LogOut</button>

    </div>
  )
}

export default Logout