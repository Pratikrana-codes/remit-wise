import React, { createContext, useContext, useEffect, useState } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

  const [token,setToken] = useState(localStorage.getItem("token"));
  const [user,setUser]= useState("");

  const storeTokenInLS= (servertoken) =>{
    return localStorage.setItem("token",servertoken);
  };

  let isLoggedIn = !!token;
  // let [isLoggedIn,setisLoggedIn] = useState(!!localStorage.getItem('token'));

  //tackling the logout functionality in the website
  
  const LogoutUser = () => {

    setToken("");

    return localStorage.removeItem('token');
  }
  // JwT Authentication - to get the currently loggedIN user data
  const userAuthentication = async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/auth/user",{
        method:"GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(response.ok){
        const data = await response.json();
        // console.log('user data', data.userData);
        
        setUser(data.userData);
      }
    } catch (error) {
      
    }
  }
  useEffect( ( ) => {
    userAuthentication();
  })
return (
  <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser, user}}>
    {children}
  </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if(!authContextValue){
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
}
