import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const ArtefactTable = ({artefact}) =>{
    return(
        <div class='table_div'>
                <table>
                    <tr>
                        <th>Artefact Name</th>
                        <th>Artefact Description</th>
                        <th></th>
                    </tr>
                    <tr>
                        
                        <td>{artefact.artefact_name}</td>
                        <td>{artefact.artefact_description}</td>
                        <td><Link to="/editArtefact">edit</Link><a href="#" id="delete"> delete</a></td>
                    </tr>
                </table>
        </div>
    )
}

export default ArtefactTable