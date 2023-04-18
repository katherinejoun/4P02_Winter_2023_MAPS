import { useState, useEffect } from "react"
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom"

const CreateArtifact = () => {
  const [artifact_name, setTitle] = useState('')
  const [artifact_description, setDescription] = useState('')
  const [exhibit_id, setExhibitId] = useState('')
  const [selectedExhibit, setExhibitName] = useState('')
  const [tags, setTags] = useState('')
  const [error, setError] = useState(null)
  const [exhibit, setExhibit] = useState([]); 

  const navigate = useNavigate()

  useEffect(() => {
    const fetchExhibits = async () =>{
      const {data, error} = await supabase
      .from("exhibit")
      .select()
      if (error){
        setError("Could not get exhibit list")
        setExhibit(null)
        console.log(error)
      }
      if (data){
        setExhibit(data)
        setError(null)
      }
    }
    fetchExhibits();
  }, []);

  function handleSelectChange(event) {
    setExhibitName(event.target.value);
  }
 
  function goBack(){
    window.history.back();
  }
      
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!artifact_name || !artifact_description){
      setError("Please fill in all required fields")
      return 
    }
    const {data, error} = await supabase
    .from('artifact')
    .insert([{artifact_name, artifact_description, "exhibit_name": selectedExhibit}
    ])

    if (error){
        console.log(error)
        setError("Please fill in all required fields")
    }

    if (data){
        console.log(data)
        setError(null)
        navigate('/')
        

    }
  }

  return (
    <div className="page create">
        <body>
        <div class="main">
          <div class="header">
            <h2 class="title">Create New Artifact</h2>
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
                   <select value={selectedExhibit} onChange={handleSelectChange}>
                    {exhibit.map(exhibit => (
                      <option id="exhibits" class="input_half" key={exhibit.exhibit_id} value={exhibit.exhibit_name}>{exhibit.exhibit_name}</option>
                    ))}
                  </select>
                  </div>
                  <div class = 'form_group'>
                    <label for = "upload_img" class = "label_half"> Upload Images or Video: </label>
                    <input class = "input_half" id = "upload_img" type="file" name="upload_img"/>
                  </div>
                </fieldset>
                <div>
                  <button type = "reset" class=" btn wht_btn" onClick={goBack}> Cancel </button>
                  <button class= "btn red_btn"> Create Artifact </button>
                </div>
                </form>
              </div>             
            </div>
        </div>
  
    </body>
    </div>

)
}

export default CreateArtifact
