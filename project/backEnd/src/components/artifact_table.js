import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import supabase from "../config/supabaseClient"
import Modal from "react-modal"
Modal.setAppElement("#root")


const ArtifactTable = ({artifact}) =>{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    }
  
    const closeModal = () => {
      setModalIsOpen(false);
    }
    const handleDelete = async () =>{
        const {data, error} = await supabase
            .from('artifact')
            .delete()
            .eq('artifact_id', artifact.artifact_id)
        
        if(error){
            console.log(error)
        }

        if(data){
            console.log(data)
        }
    }

    

    return(
        <div class='table_div'>
                <table>
                    <tr>                        
                        <td>{artifact.artifact_name}</td>
                        <td>{artifact.artifact_description}</td>
                        <td><Link to={"/" + artifact.artifact_id}>edit</Link><p onClick={openModal}>delete</p>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal">
                                <p class="modal_text">Are you sure you want to delete Artifact A”?</p>
                                <div class="button_group">
                                <button class="btn wht_btn" id = "cancel" onClick={closeModal} >Cancel</button>
                                <button class="btn red_btn" id ="delete" onClick={handleDelete}>Delete</button>
                            </div>
        
                        </Modal></td>
                    </tr> 
                </table>             
        </div>
    )
}

export default ArtifactTable