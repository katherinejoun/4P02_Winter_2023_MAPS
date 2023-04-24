import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext, UserAuth } from "./auth";
import Login from "../pages/signin";
import supabase from "../config/supabaseClient";
import getAuthenticated from "./get_auth";


const RestrictedRoute = ({children}) => {
 const sess = getAuthenticated();
  
 {/*} const projectName = process.env.REACT_APP_SUPABASE_NAME
  const tokenKey = "sb-" + projectName + "-auth-token";

  const sess = localStorage.getItem(tokenKey);
const userID = JSON.parse(sess);*/}
{/*const [authUser, setAuthUser] = findUser();


  

const findUser = async () => {
        const {data, error} = await supabase
        .from("users")
        .select()
        .eq('id', userID);
      if (data) {
        setAuthUser(data);
      }
      if (error) {
        setAuthUser(null);
      }

      }
  useEffect(() => {
    
    findUser();


  },[])*/}

  if (sess === null) {
    return <Navigate to="/signin" />;
  }
  else {
    return children;
  }
}
export default RestrictedRoute;
