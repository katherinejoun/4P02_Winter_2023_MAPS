import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import ExhibitList from "./pages/ExhibitList"
import CreatePoi from "./pages/create_poi"
import EditPoi from "./pages/Edit_poi";
import CreateArtefact from "./pages/create_artefact";
import ArtefactList from "./pages/artefactList";


function App() {
  return (
    <BrowserRouter>
      <nav>
      <button type = "submit" value ="submit" class= "btn red_btn" id="new_poi_btn"> Create New Point of Interest </button>
            <div class="clear"></div>
        <Link to="/">Exhibit List</Link>
        <Link to="/create_poi">Create Point of Interest</Link>
        <Link to="/create_artefact">Create Artefact</Link>
        <Link to="/artefactList">Manage Artefacts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ExhibitList />} />
        <Route path="/create_poi" element={<CreatePoi />} />
        <Route path="/Edit_poi" element={<EditPoi />} />
        <Route path="/create_artefact" element={<CreateArtefact />} />
        <Route path="/artefactList" element={<ArtefactList />} />
        {/*<Route path="/:id" element={<Update />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
