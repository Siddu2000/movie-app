import React, { useState,useContext, useEffect } from "react";
import { auth } from "../Firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from 'firebase/auth';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser]=useState(null);
    const [loading, setLoading] = useState(true)
  
        function signup(email, password) {
            return createUserWithEmailAndPassword(auth, email, password);
          }
          function login(email, password) {
            return signInWithEmailAndPassword(auth,email, password)
          }
          function logout() {
            return signOut(auth)
          }
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(true)
        })
    
        return unsubscribe
      }, [])
    
const value={
    currentUser,
    signup,
    login,
    logout,
}
    return(
        <AuthContext.Provider value={value}>
            {loading && children}
        </AuthContext.Provider>
    )

}