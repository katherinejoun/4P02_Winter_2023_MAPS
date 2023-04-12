import { Link } from 'react-router-dom';
import { useState } from 'react';
import supabase from '../config/supabaseClient';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: '/'
      }
    })
    if (error) {
     alert(error.message);
    }
    else {
      alert("Check your email to confirm your registration.")
    }
  };

  return (
    <div className="main">
      <div className="header">
        <h2 className="title">Interactive Map Administrative Access</h2>
      </div>
      <div className="form" id ="login">
        <form onSubmit = {handleSubmit}>
          <h3>Register an account to manage the Interactive Map.  Account email must be your museum staff address.</h3>
          <div className='left'>
            <p id="message">{message }</p>
            <label for ="username" className ="label"> Email: </label>
            <input className ="input_full" id ="username" type="email" name="username" required={true} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label for ="password" className="label">Password: </label>
            <input className='input_full' id="password" type="password" name="password" required={true} value = {password} onChange={(e)=>setPassword(e.target.value)} />
            <Link to="/login">Log in to existing account.</Link> 
          </div>
          <div>
            <button type ="submit" className = "btn red_btn" id="login_btn"> Create Account </button>
          </div>
        </form>
      </div>
      <div className="main_div" id = "logout">
        <h4><a href="https://www.notlmuseum.ca/">Back to Main Site</a></h4>
      </div>
    </div>
  );
}

export default Register;