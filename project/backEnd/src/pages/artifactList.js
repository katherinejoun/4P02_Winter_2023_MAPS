import supabase from "../config/supabaseClient"
import {Link} from "react-router-dom";
import {useEffect, useState } from "react";
import Table from "../components/artifact_table"
import Signout from "../components/signout";


const ArtifactList = () => {
  const [error, setError] = useState(null)
  const [artifact, setArtifact] = useState(null)
  

  useEffect(() => {
    const fetchArtifacts = async () =>{
      const {data, error} = await supabase
      .from("artifact")
      .select()
      if (error){
        setError("Could not get artifact list")
        setArtifact(null)
        console.log(error)
      }
      if (data){
        setArtifact(data)
        setError(null)
      }
    }

    fetchArtifacts()
  })

  
  return (
    <div className="page home">
        <div class="header">
            <h2 class="title">Manage Artifacts</h2>
        </div>
        {error && (<p>{error}</p>)}
            {artifact && (
            <div class="main">
                <div class="centre">
                    <div class=" tabs">
                    <Link to="/create_artifact" class=" tab blue_tab">CREATE ARTIFACT</Link>
                    <Link to ="/create_exhibit" class=" tab red_tab">CREATE EXHIBIT</Link>   
                    <Link to="/exhibitList" class= "tab blue_tab">EXHIBIT LIST</Link>
                    <a href="#" class= "tab clear_tab">OPTIONS</a>
                    </div>
                    <table>     
                      <tr>
                        <th>Artifact Name</th>
                        <th>Artifact Description</th>
                        <th>Exhibit Name</th>
                        <th></th>
                      </tr>
                    </table>
              {artifact.map(artifact => (
              <Table key = {artifact.artifact_id} artifact={artifact}/>
                ))}
                </div>  
              </div>   
           )}

        <div className="main_div" id="logout">
          <span onClick={Signout}><h4>Logout</h4></span>
        </div>
    </div>
  )
}
export default ArtifactList

{/* <section>
                <table>
                    <tr>
                        <th>ARTEFACTS</th>
                        <th>ASSOCIATED EXHIBIT</th>
                        <th>TAGS</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td><select name="exhibits" id="exhibits">
                            <option value = "#"> Exhibit 1</option>
                            <option value = "#"> Exhibit 2</option>
                            <option value = "#"> Exhibit 3</option>
                          </select></td>
                        <td>Tags</td>
                        <td><a href="edit_artefact.html">edit / </a><a href="#" class="delete"> delete</a></td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td><select name="exhibits" id="exhibits">
                            <option value = "#"> Exhibit 1</option>
                            <option value = "#"> Exhibit 2</option>
                            <option value = "#"> Exhibit 3</option>
                          </select></td>
                        <td>Tags</td>
                        <td><a href="edit_artefact.html">edit / </a><a href = "#" class="delete"> delete</a></td>
                    </tr>
                </table>
              </section>
              <div class="modal" id="delete_mod">
                <div class="modal_content">
                  <div>
                    <p class="modal_text">Are you sure you want to delete "Artefact A"?</p>
                  </div>
                  <div class="button_group">
                    <button class="btn wht_btn" id = "cancel">Cancel</button>
                    <button class="btn red_btn" id ="delete">Delete</button>
                  </div>
                </div>
            </div>
            <div>
              <button type = "submit" value ="submit" class= "btn red_btn"> Create New Artefact </button>
            </div>
          </div>             
        </div> */}