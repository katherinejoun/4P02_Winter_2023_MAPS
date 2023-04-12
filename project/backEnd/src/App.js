import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import ExhibitList from "./pages/ExhibitList"
import CreatePoi from "./pages/create_poi"
import EditPoi from "./pages/Edit_poi";
import CreateArtifact from "./pages/create_artifact";
import ArtifactList from "./pages/artifactList";
import EditArtifact from "./pages/editArtifact";
import Login from "./pages/signin";
import Register from "./pages/signup";
import SetPassword from "./pages/set_password";
import RequestPasswordReset from "./pages/request_reset";

function App() {
  return (
    <BrowserRouter>
    {/*
      <nav>
      <button type = "submit" value ="submit" class= "btn red_btn" id="new_poi_btn"> Create New Point of Interest </button>
            <div class="clear"></div>
        <Link to="/">Exhibit List</Link>
        <Link to="/create_poi">Create Point of Interest</Link>
        <Link to="/create_artifact">Create Artifact</Link>
        <Link to="/artifactList">Manage Artifacts</Link>
        <Link to="/editArtifact">Edit Artifact</Link>
        <Link to="/Edit_poi">Edit POI</Link>
      </nav>
  */}

      <Routes>
        <Route path="/" element={<ExhibitList />} />
        <Route path="/create_poi" element={<CreatePoi />} />
        <Route path="/Edit_poi" element={<EditPoi />} />
        <Route path="/create_artifact" element={<CreateArtifact />} />
        <Route path="/artifactList" element={<ArtifactList />} />
        <Route path="/:artifact_id" element={<EditArtifact />} />
        <Route path="/ExhibitList" element={<ExhibitList />}></Route>
        <Route path="/create_poi" element={<CreatePoi />}></Route>
        <Route path="/Edit_poi" element={<EditPoi />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/request_reset" element={<RequestPasswordReset />}></Route>
        <Route path="/set_password" element={<SetPassword />}></Route>
        {/*<Route path="/:id" element={<Update />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;