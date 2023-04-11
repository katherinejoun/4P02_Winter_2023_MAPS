import supabase from "../config/supabaseClient"
import {Link} from "react-router-dom";
import {useEffect, useState } from "react";
import Table from "../components/artefact_table"


const ArtefactList = () => {
  const [error, setError] = useState(null)
  const [artefact, setArtefact] = useState(null)
  

  useEffect(() => {
    const fetchArtefacts = async () =>{
      const {data, error} = await supabase
      .from("artefact")
      .select()
      if (error){
        setError("Could not get artefact list")
        setArtefact(null)
        console.log(error)
      }
      if (data){
        setArtefact(data)
        setError(null)
      }
    }

    fetchArtefacts()
  })

  return (
    <div className="page home">
        <div class="header">
            <h2 class="title">Manage Artefacts</h2>
        </div>
        {error && (<p>{error}</p>)}
            {artefact && (
            <div class="main">
                <div class="centre">
                    <div class=" tabs">
                        <a href="#" class=" tab blue_tab">EXHIBIT MAP</a>
                        <a href ="exhibit_list.html" class=" tab red_tab">EXHIBIT LIST</a>   
                        <a href="#" class= "tab blue_tab">ARTEFACT LIST</a>
                        <a href="#" class= "tab clear_tab">OPTIONS</a>
                    </div>
              {artefact.map(artefact => (
              <Table key = {artefact.id} artefact={artefact}/>
                ))}
        </div>  
        </div>   
           

)}
</div>
   )
}
export default ArtefactList

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