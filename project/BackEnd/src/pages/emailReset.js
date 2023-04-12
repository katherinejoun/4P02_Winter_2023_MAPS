import { useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../config/supabaseClient";

const RequestPasswordReset = () => {
  const navigate = useNavigate;
  const [email, setEmail] = useState("");

  const handle = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/setPassword',
      })
    if (error) {
      alert(error.message);
    }
  }

  return(
    <div className="main">
      <div className="header">
        <h2 className="title">Interactive Map Administrative Access</h2>
      </div>
      <div className="form" id ="password_reset">
        <form onSubmit={handle}>
          <h3>To request a password reset, enter the email address you use to login in.  An email with a reset link will be sent to your account.</h3>
          <div className='left'>
            <p id="message"></p>
            <label for = "username" className = "label"> Email: </label>
            <input className = "input_full" id = "username" type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button type = "submit" className = "btn red_btn" id="login_btn"> Send Request </button>
          </div>
        </form>
      </div>
      <div className="main_div" id = "logout">
        <h4><a href="https://www.notlmuseum.ca/">Back to Main Site</a></h4>
      </div>
    </div>
  )
};

{/*}
export default function RequestPasswordReset() {
  return(
    <div className="main">
      <div className="header">
        <h2 className="title">Interactive Map Administrative Access</h2>
      </div>
      <div className="form" id ="password_reset">
        <form action ="#">
          <h3>Enter the email address you use to login in to request a password reset.  An email will be sent to your account.</h3>
          <div className='left'>
            <p id="message"></p>
            <label for = "username" className = "label"> Email: </label>
            <input className = "input_full" id = "username" type="text" name="username"/>
            <button type = "button" className = "btn red_btn" id="login_btn"> Log In </button>
          </div>
          <div className='right'> 
          </div>
        </form>
      </div>
      <div className="main_div" id = "logout">
          <h4><a href="https://www.notlmuseum.ca/">Back to Main Site</a></h4>
      </div>
    </div>
  );
}
*/}

export default RequestPasswordReset;