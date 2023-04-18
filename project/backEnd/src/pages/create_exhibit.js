import { useState, useEffect} from "react"
import supabase from "../config/supabaseClient"
import { Navigate, useNavigate } from "react-router-dom"

const CreateExhibit = () => {
  const [exhibit_name, setTitle] = useState('')
  const [exhibit_description, setDescription] = useState('')
  const [relatedPages, setRelatedPages] = useState('')
  const [tags, setTags] = useState('')
  const [error, setError] = useState(null)
  const [artefact, setArtefact] = useState('')
  const [exhibit_location, setLocation] = useState([])
  const [selectedLocation, setLocationName] = useState('')


  const navigate = useNavigate()

  useEffect(() => {
    const fetchLocations = async () =>{
      const {data, error} = await supabase
      .from("exhibit_location")
      .select()
      if (error){
        setError("Could not get location list")
        setLocation(null)
        console.log(error)
      }
      if (data){
        setLocation(data)
        setError(null)
      }
    }
    fetchLocations();
  }, []);

  function handleSelectChange(event) {
    setLocationName(event.target.value);
  }

  function goBack(){
    window.history.back();
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!exhibit_name || !exhibit_description){
      setError("Please fill in all required fields")
      return 
    }
    const {data, error} = await supabase
    .from('exhibit')
    .insert([{exhibit_name, exhibit_description, "location_name": selectedLocation}])

    if (error){
        console.log(error)
        setError("Please fill in all required fields")
    }

    if (data){
        console.log(data)
        setError(null)
        navigate('/exhibitList.js')

    }
  }

  return (
    <div className="page create">
      <body>
        <div class="main">
          <div class="header">
            <h2 class="title">Create New Exhibit</h2>
          </div>
          <div class="centre">
            <div class="tabs">
              {/*<a href="#" class=" tab red_tab">ENGLISH DATA</a>
              <a href ="#" class=" tab blue_tab">FRENCH DATA</a>   
  <a href="#" class= "tab clear_tab">OPTIONS</a>*/}
            </div>
            <div class="table_div">
              <form onSubmit={handleSubmit}>
              <fieldset>
                {/* <select>
                  {options.map(option =>(
                    <option key = {option.id} value={option.value}>{option.label}</option>
                  ))}
                </select> */}
                {/* <select name="artefacts" id="artefacts">
                  <option value="" disabled selected>Exhibit Type</option>
                  <option value = "#"> Artefact 1</option>
                  <option value = "#"> Artefact 2</option>
                  <option value = "#"> Artefact 3</option>
                </select> */}
                <div class = 'form_group'>
                  <label for = "title" class = "title"> Title: </label>
                  <input class = "input_half" id = "title" type="text" value={exhibit_name}
                  onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div class = 'form_group'>
                  <label for = "description" class = "label"> Description: </label>
                  <input class = "input_half" id = "description" type="text" value={exhibit_description}
                  onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div class = 'form_group'>  
                  <label for = "related_pages" class = "label"> Related Pages: </label>
                  <input class = "input_half" id = "related_pages" type="text" value={relatedPages}
                  onChange={(e) => setRelatedPages(e.target.value)}/>
                </div>
                <div class = 'form_group'>
                  <label for = "tags" class = "label"> Tags: </label>
                  <input class = "input_half" id = "tags" type="text" value={tags}
                  onChange={(e) => setTags(e.target.value)}/>
                </div>
                <div class = 'form_group'>
                  <label for = "upload_audio" class = "label"> Upload Audio Description: </label>
                  <input class = "input_half" id = "upload_audio" type="file" name="upload_audio"/>
                </div>
                <div class = 'form_group'>
                  <label for = "upload_img" class = "label"> Upload Images or Video: </label>
                  <input class = "input_half" id = "upload_img" type="file" name="upload_img"/>
                </div>
                <div class = 'form_group'>
                  <label for = "associated_artefact" class = "label"> Associated Artefact: </label>
                  {/*<select name="artefacts" id="artefacts" class="input_half" style="width:50%;">
                    <option value = "#"> Artefact 1</option>
                    <option value = "#"> Artefact 2</option>
                    <option value = "#"> Artefact 3</option>
</select>*/}
                </div>
                <div class = 'form_group'>
                  <label for = "location" class = "label"> Location: </label>
                  <select value={selectedLocation} onChange={handleSelectChange}>
                    {exhibit_location.map(exhibit_location => (
                      <option id="exhibits" class="input_half" key={exhibit_location.location_id} value={exhibit_location.location_name}>{exhibit_location.location_name}</option>
                    ))}
                  </select>
{/*                   <input class = "input_half" id = "location" type="text" value={exhibit_location}
                  onChange={(e) => setLocation(e.target.value)}/> */}
                </div>
              </fieldset>
              <div>
                <button class= "btn red_btn"> Create New Exhibit </button>
                <button type = "reset" class=" btn wht_btn" onClick={goBack}> Cancel </button>                
              </div>
              {error && <p className="error">{error}</p>}
              </form>
            </div>             
          </div>
        </div>
    </body>
    </div>
  )
}

export default CreateExhibit