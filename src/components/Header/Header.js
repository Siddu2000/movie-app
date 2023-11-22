import React, { useState } from "react";
import user from "../../assets/user.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { fetchMovies, fetchShows } from "../../StoreSlices/movieSlice";
import { useDispatch } from "react-redux";
import Logout from "../../Authentication/Logout";

const Header = () => {
  const [term,setTerm]=useState("");
  const dispatch=useDispatch();

  const handleOnsubmit=(e)=>{
    e.preventDefault()
    if(term==="") return alert("please enter a correct value");
    dispatch(fetchMovies(term));
    dispatch(fetchShows(term));

    setTerm(" ")
  }

  return (
    <div className="header">
     <Link to="/"> <div className="logo"> MovieApp</div></Link>
     <div>
     <form className="form" onSubmit={handleOnsubmit}>
      <input type="search"  value={term} onChange={(e)=>setTerm(e.target.value)} placeholder="Search movies or shows..."/>
      <button className="bg-white" >🔍</button>
     </form>
     </div>
      <div className="user-image">
     <Link to="/sign-up">  <img src={user} alt="user" /></Link> 
      </div>
    </div>
  );
};

export default Header;
