import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const SetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');

  const handle = async (event) => {
    event.preventDefault();

    if ( password !== password2 ) {
      return (
        setMessage("Passwords must match.")
      );
      
    }
    const { data, error } = await supabase.auth.updateUser({password: password})
    if (error) {
      alert(error.message);
    }else {
      navigate('/ExhibitList')
    }
  }
  
  return(
    <body>
      <div className="main">
        <div className="header">
          <h2 className="title">Set Account Password</h2>
        </div>
        <div className="form" id="setpwd">  
          <form onSubmit={handle}>
            <h3>Enter a password to use with your user account.  Password must contain at least six characters.</h3>
            <div className="left">
              <p id="message">{ message }</p>
              <p>
                <label for="password" className="label" name="password">Enter password:</label>
                <input type="password" id="password" name="password" className= "input_full" required={true} value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </p>
              <p>
                <label for="password2">Re-Enter Password:</label>
                <input type="password" id="password2" name="password2" className= "input_full" required={true} value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
              </p>
              <button type="submit" id="submit_password" className="btn red_btn">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
      <div className="main_div" id = "logout">
        <h4><Link to="/login">Return to Login</Link></h4>
      </div>
    </body>
  )
};

export default SetPassword;