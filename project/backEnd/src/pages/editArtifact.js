import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";


const EditArtifact = () => {

    const { artifact_id } = useParams()
    const navigate = useNavigate()

    const [artifact_name, setTitle] = useState('')
    const [artifact_description, setDescription] = useState('')
    const [formError, setFormError] = useState(null)

    function goBack(){
      window.history.back();
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!artifact_name || !artifact_description){
            setFormError('Please complete all required sections')
            return
        }

        const {data, error} = await supabase
            .from('artifact')
            .update({artifact_name, artifact_description})
            .eq("artifact_id", artifact_id)

        if (error){
            console.log(error)
            setFormError('Please complete all required sections')
        }

        if (data){
            setFormError(null)
            navigate('/artifactList')

        }
    }

    
    useEffect(() => {
        const fetchArtifact = async () =>{
            const {data, error} = await supabase
                .from('artifact')
                .select()
                .eq('artifact_id', artifact_id)
                .single()
            
            if (error) {
                navigate('/', {replace: true})
            }

            if(data){
                setTitle(data.artifact_name)
                setDescription(data.artifact_description)
                console.log(data)

            }
        }
    fetchArtifact()
    }, [artifact_id, navigate])
    return(
        <div className="page update">
            <div class="main">
          <div class="header">
            <h2 class="title">Edit Artifact</h2>
          </div>
            <div class="centre">
              <div class=" tabs">
                <a href="#" class=" tab red_tab">ENGLISH DATA</a>
                <a href ="#" class=" tab blue_tab">FRENCH DATA</a>   
                <a href="#" class= "tab clear_tab">OPTIONS</a>
              </div>
              <div class="table_div">
                <form onSubmit={handleSubmit}>
                <fieldset>
                  <div class = 'form_group'>
                    <label for = "title" class = "title"> Title: </label>
                    <input class = "input_half" id = "title" type="text" value={artifact_name}
                    onChange={(e) => setTitle(e.target.value)}/>
                  </div>
                  <div class = 'form_group'>
                    <label for = "description" class = "label"> Description: </label>
                    <input class = "input_half" id = "description" type="text" value={artifact_description}
                    onChange={(e) => setDescription(e.target.value)}/>
                  </div>
                  <div class = 'form_group'>
                    <label for = "upload_audio" class = "label"> Upload Audio Description: </label>
                    <input class = "input_half" id = "upload_audio" type="file" name="upload_audio"/>
                  </div>  
                  <div class = 'form_group'>
                    <label for = "tags" class = "label"> Tags: </label>
                    <input class = "input_half" id = "tags" type="text" name="tags"/>
                  </div>
                  <div class = 'form_group'>
                    <label for = "associated_exhibit" class = "label"> Associated Exhibit: </label>
                    <select name="exhibits" id="exhibits" class="input_half">
                      <option value = "#"> Exhibit 1</option>
                      <option value = "#"> Exhibit 2</option>
                      <option value = "#"> Exhibit 3</option>
                    </select>
                  </div>
                  <div class = 'form_group'>
                    <label for = "upload_img" class = "label_half"> Upload Images or Video: </label>
                    <input class = "input_half" id = "upload_img" type="file" name="upload_img"/>
                  </div>
                </fieldset>
                <div>
                  <button type = "reset" value ="Submit" class=" btn wht_btn" onClick={goBack}> Cancel </button>
                  <button class= "btn red_btn"> Save Changes</button>
                </div>
                {formError && <p className="error">{formError}</p>}
                </form>
              </div>             
            </div>
        </div>
        </div>
    )
}

export default EditArtifact