import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react";
import '../index.css';
import supabase from "../config/supabaseClient";
import { AuthContext, UserAuth } from "../components/auth";
import getAuthenticated from "../components/get_auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const userSession  = useContext(AuthContext);
  const session = getAuthenticated();  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      console.log(error);
      alert(error.message);
    }
    else {
      console.log(data);
      navigate("/ExhibitList");
    }
  };

  if ( session == null ) {
    return(
      <div className="main">
        <div className="header">
          <h2 className="title">Interactive Map Administrative Access</h2>
        </div>
        <div className="form" id ="login">
          <form onSubmit={handleSubmit}>
            <h3>Log in to Manage and Edit the Interactive Map</h3>
            <div className='left'>
              <p id="message"></p>
              <p>
                <label for = "username" className = "label"> Email: </label>
                <input className = "input_full" id = "username" type="text" name="username" required={true} value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </p>
              <p>
                <label for = "password" className = "label"> Password: </label>
                <input className = "input_full" id = "password" type="password" name="password" required={true} value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </p>
              <Link to="/request_reset">Forgot your password?</Link> Or, 
              <Link to="/signup"> Create an account.</Link>
              <button type = "submit" className = "btn red_btn" id="login_btn"> Log In </button>
            </div>
          </form>
        </div>
        <div className="main_div" id = "logout">
          <h4><a href="https://www.notlmuseum.ca/">Back to Main Site</a></h4>
        </div>
      </div>
    );
 } 


  else {
    return (
      <Navigate to="/"></Navigate>
    );
  }
}

export default Login;

{/*
const CreateLogin = () => {
    return (
        <div class="main">
                <div class="header">
                  <h2 class="title">Interactive Map Administrative Access</h2>
                </div>
                <div class="form" id ="login">
                  <form action ="#" method = "get">
                    <h3>Log in to Manage and Edit the Interactive Map</h3>
                    <div class='left'>
                      <label for = "username" class = "label"> Employee ID: </label>
                      <input class = "input_full" id = "username" type="text" name="username"/>
                      <label for = "password" class = "label"> Password: </label>
                      <input class = "input_full" id = "password" type="text" name="password"/>
                      <a href ="#" class ="psw">Forgot your login info?</a>
                      <button type = "submit" class = "btn red_btn" id='login_btn'> Log In </button>
                    </div>
                    <div class='right'> 
                    </div>
                  </form>
                </div>
            </div>
    )}

    export default CreateLogin
    */}