import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import ExhibitList from "./pages/ExhibitList"
import CreatePoi from "./pages/create_poi"
import EditPoi from "./pages/Edit_poi";
import CreateArtifact from "./pages/create_artifact";
import ArtifactList from "./pages/artifactList";
import EditArtifact from "./pages/editArtifact";
import Login from "./pages/login";
import Register from "./pages/register";
import SetPassword from "./pages/setPassword";
import RequestPasswordReset from "./pages/emailReset";


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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sendReset" element={<RequestPasswordReset />}></Route>
        <Route path="/setPassword" element={<SetPassword />}></Route>
        {/*<Route path="/:id" element={<Update />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/*import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import ExhibitList from "./pages/ExhibitList"
import CreatePoi from "./pages/create_poi"
import EditPoi from "./pages/Edit_poi";
import CreateArtifact from "./pages/create_artifact";
import ArtifactList from "./pages/artifactList";
import EditArtifact from "./pages/editArtifact";


function App() {
  return (
    <BrowserRouter>
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
      <Routes>
        <Route path="/" element={<ExhibitList />} />
        <Route path="/create_poi" element={<CreatePoi />} />
        <Route path="/Edit_poi" element={<EditPoi />} />
        <Route path="/create_artifact" element={<CreateArtifact />} />
        <Route path="/artifactList" element={<ArtifactList />} />
        <Route path="/:artifact_id" element={<EditArtifact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/}
