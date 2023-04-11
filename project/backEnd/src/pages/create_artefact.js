import { useState } from "react"
import supabase from "../config/supabaseClient"
import { Navigate, useNavigate } from "react-router-dom"

const CreateArtefact = () => {
  const [artifact_name, setTitle] = useState('')
  const [artifact_description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [error, setError] = useState(null)

    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!artifact_name || !artifact_description){
      setError("Please fill in all required fields")
      return 
    }
    const {data, error} = await supabase
    .from('artifact')
    .insert([{artifact_name, artifact_description}])

    if (error){
        console.log(error)
        setError("Please fill in all required fields")
    }

    if (data){
        console.log(data)
        setError(null)
        navigate('/artefactList.js')

    }
  }

  return (
    <div className="page create">
        <body>
        <div class="main">
          <div class="header">
            <h2 class="title">Create New Artefact</h2>
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
                  {/*<div class = 'form_group'>
                    <label for = "tags" class = "label"> Tags: </label>
                    <input class = "input_half" id = "tags" type="text" value={tags}
                     onChange={(e) => setTags(e.target.value)}/>
  </div>*/}
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
                  <button type = "reset" class=" btn wht_btn"> Cancel </button>
                  <button class= "btn red_btn"> Create Artefact </button>
                </div>
                </form>
              </div>             
            </div>
        </div>
  
    </body>
    </div>

)
}

export default CreateArtefact
