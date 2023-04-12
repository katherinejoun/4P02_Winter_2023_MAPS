import supabase from "../config/supabaseClient";
import { useState } from "react";
import Login from "../pages/login";

const IsLoggedIn = async () => {
  const [session, setSession] = useState(null);
  
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    alert(error.message);
  }
  if (data) {
    setSession(data);
  }
  return (session);

}
export default IsLoggedIn;