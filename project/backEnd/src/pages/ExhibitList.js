import supabase from "../config/supabaseClient"
import {Link, useNavigate, Navigate} from "react-router-dom";
import {useContext, useEffect, useState } from "react";
import Table from "../components/exhibit_table"
import Logout from "./signout";
import { UserAuth } from "../components/auth";


const ExhibitList = () => {
  const [error, setError] = useState(null)
  const [exhibits, setExhibits] = useState(null)
  
  const navigate = useNavigate
  

  useEffect(() => {
    const fetchExhibits = async () =>{
      const {data, error} = await supabase
      .from("exhibit")
      .select()
      if (error){
        setError("Could not get exhibit list")
        setExhibits(null)
        console.log(error)
      }
      if (data){
        setExhibits(data)
        setError(null)
      }
    }

    fetchExhibits()
  })


  return (

      <div className="page home">
        <div class="header">
            <h2 class="title">Exhibit List</h2>
        </div>
        {error && (<p>{error}</p>)}
        {exhibits && (
          <div class="main">
            <div class="centre">
            <div class="tabs">
                <Link to="/create_artifact" class=" tab blue_tab">CREATE ARTIFACT</Link>
                <Link to ="/create_exhibit" class=" tab red_tab">CREATE EXHIBIT</Link>   
                <Link to="/artifactList" class= "tab blue_tab">ARTIFACT LIST</Link>
                <a href="#" class= "tab clear_tab">OPTIONS</a>
            </div>
            <table>     
              <tr>
                        <th>Exhibit Name</th>
                        <th>Exhibit Description</th>
                        <th></th>
                    </tr>
            </table>
            {exhibits.map(exhibit => (
              <Table key = {exhibit.id} exhibit={exhibit}/>

          ))}
          </div>
            
        </div>
      )}
      <div className="main_div" id = "logout">
        <span onClick={Logout}><h4>Logout</h4></span>
      </div>
    </div>

  )
  
}
  
  export default ExhibitList
        
        
          /* 
            
              
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
                        <td><Link to="/Edit_poi">edit</Link><a href="#" id="delete"> delete</a></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="edit_poi">edit / </a><a href = "#" id="delete"> delete</a></td>
                    </tr>
                </table>
                
              </div>
              <div class="modal" id="delete_mod">
                <div class="modal_content">
                  <div>
                    <p class="modal_text">Are you sure you want to delete “Exhibit A”?</p>
                  </div>
                  <div class="button_group">
                    <button class="btn wht_btn" id = "cancel">Cancel</button>
                    <button class="btn red_btn" id ="delete">Delete</button>
                  </div>
                </div>
            </div>
          </div>             
        </div>  */
        

  
    
