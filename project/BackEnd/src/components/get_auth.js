import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";



 

  const getAuthenticated = () => {
    {/*const tokenKey = "sb-" + "lrmeyctmnvxcquqwhbkd" + "-auth-token";

    const sess = localStorage.getItem(tokenKey);
    const userID = sess.user.id;
    const [auth, setAuth] = useState(null);

    useEffect(() => {
      const findUser = async () => {

        try {
          const {data, error} = await supabase
          .from("users")
          .select()
         .eq('User UID', userID);
       if (data) {
          setAuth(data);
        }
        if (error) {
          setAuth(null);
        }

        }
        catch (e) {
          setAuth(null);
        }
      


    }})*/}

    const projectName = process.env.REACT_APP_SUPABASE_NAME
  const tokenKey = "sb-" + projectName + "-auth-token";

  const sess = localStorage.getItem(tokenKey);
const userID = JSON.parse(sess);

    return sess;
  
  }
  export default getAuthenticated;