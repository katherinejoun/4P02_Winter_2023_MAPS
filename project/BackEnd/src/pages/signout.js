import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Logout = async () => {
  const navigate = useNavigate;
  const { error } = await supabase.auth.signOut()
  if (error) {
    alert(error.message);
  }
  else {
    window.location.replace("https://www.notlmuseum.ca/");
  }
}

export default Logout;