import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const authenticatedUser = () => {
  const projectName = process.env.REACT_APP_SUPABASE_NAME
  const tokenKey = "sb-" + projectName + "-auth-token";

  const session = localStorage.getItem(tokenKey);
  {/*const userID = JSON.parse(sess);*/}

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


  return session;
}
export default authenticatedUser;
  
