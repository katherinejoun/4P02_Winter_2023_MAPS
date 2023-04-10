import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import ExhibitList from "./pages/ExhibitList"
import CreatePoi from "./pages/create_poi"
import EditPoi from "./pages/Edit_poi";


function App() {
  return (
    <BrowserRouter>
      <nav>
      <button type = "submit" value ="submit" class= "btn red_btn" id="new_poi_btn"> Create New Point of Interest </button>
            <div class="clear"></div>
        <Link to="/">Exhibit List</Link>
        <Link to="/create_poi">Create Point of Interest</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ExhibitList />} />
        <Route path="/create_poi" element={<CreatePoi />} />
        <Route path="/Edit_poi" element={<EditPoi />} />
        {/*<Route path="/:id" element={<Update />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
