import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const ArtifactTable = ({artifact}) =>{
    return(
        <div class='table_div'>
                <table>
                    <tr>
                        <th>Artifact Name</th>
                        <th>Artifact Description</th>
                        <th></th>
                    </tr>
                    <tr>
                        
                        <td>{artifact.artifact_name}</td>
                        <td>{artifact.artifact_description}</td>
                        <td><Link to={"/" + artifact.artifact_id}>edit</Link><a href="#" id="delete"> delete</a></td>
                    </tr>
                </table>
        </div>
    )
}

export default ArtifactTable