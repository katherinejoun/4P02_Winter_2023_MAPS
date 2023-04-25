import React from "react";
import supabase from "../config/supabaseClient";
import {Link} from "react-router-dom";
import '../index.css';

const NotFound = () => {
  return (  
    <div className="main">
      <div className="header">
        <h2 className="title">404: Page Not Found</h2>
      </div>
      <div className="form">
        <form>
          <div className="left">
            <p>The page you are trying to reach could not be found.</p>
            <p>Return to <Link to="/signin">login page</Link>.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default NotFound;