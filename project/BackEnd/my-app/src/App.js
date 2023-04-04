import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import supabase from './supabaseClient'

class App extends React.Component {

  render(){
    console.log(supabase)
  return (
    
    <div className="App">
      <div className="main">
          <div className="header">
            <h2 class="title">Interactive Map Administrative Access</h2>
          </div>
            <div className="centre">
              <div className="tabs">
                <a href="#" class=" tab blue_tab">EXHIBIT MAP</a>
                <a href ="#" class=" tab red_tab">EXHIBIT LIST</a>   
                <a href="artefact_list.html" class= "tab blue_tab">ARTEFACT LIST</a>
                <a href="#" class= "tab clear_tab">OPTIONS</a>
              </div>
              <div class='table_div'>
                <table>
                    <tr>
                        <th>POINTS OF INTEREST</th>
                        <th>RECOMMENDED PATH ORDER</th>
                        <th>TAGS</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="edit_poi">edit / </a><a href="#" id="delete"> delete</a></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="edit_poi">edit / </a><a href = "#" id="delete"> delete</a></td>
                    </tr>
                </table>

                <button onclick = "location.href='edit_poi.html'" type = "submit" value ="submit" class= "btn red_btn" id="new_poi_btn"> Edit Point of Interest </button>

                <div class="clear"></div>
              </div>
              <div className="modal" id="delete_mod">
                <div className="modal_content">
                  <div>
                    <p class="modal_text">Are you sure you want to delete “Exhibit A”?</p>
                  </div>
                  <div className="button_group">
                    <button class="btn wht_btn" id = "cancel">Cancel</button>
                    <button class="btn red_btn" id ="confirm">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="main_div" id = "logout">
                <h4><a href="login.html">Logout</a></h4>
            </div>
        </div>
      
    
    
        {/* // Get the modal
        var modal = document.getElementById("delete_mod");
        
        // Get the button that opens the modal
        var btn = document.getElementById("delete");
        
        // Get the <span> element that closes the modal
        var cancel = document.getElementById("cancel");
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }
        
        // When the user clicks cancel, close the modal
        cancel.onclick = function() {
          modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        } */}
        
    </div>
    
  );
}
  
}

export default App;
