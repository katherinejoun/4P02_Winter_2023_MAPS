import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const Table = ({exhibit}) =>{
    return(
        <div class='table_div'>
                <table>
                    <tr>
                        <th>Exhibit Name</th>
                        <th>Exhibit Description</th>
                        <th></th>
                    </tr>
                    <tr>
                        
                        <td>{exhibit.exhibit_name}</td>
                        <td>{exhibit.exhibit_description}</td>
                        <td><Link to="/Edit_poi">edit</Link><a href="#" id="delete"> delete</a></td>
                    </tr>
                </table>
        </div>
    )
}

export default Table