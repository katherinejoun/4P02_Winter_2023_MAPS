import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import ExhibitList from "./pages/exhibitList"
import CreateExhibit from "./pages/create_exhibit"
import EditExhibit from "./pages/edit_exhibit";
import CreateArtifact from "./pages/create_artifact";
import ArtifactList from "./pages/artifactList";
import EditArtifact from "./pages/editArtifact";



function App() {
  return (
    <BrowserRouter>
{/*       <nav>

        <Link to="/">Exhibit List</Link>
        <Link to="/create_exhibit">Create Exhibit</Link>
        <Link to="/create_artifact">Create Artifact</Link>
        <Link to="/artifactList">Manage Artifacts</Link>
        <Link to="/editArtifact">Edit Artifact</Link>
        <Link to="/edit_exhibit">Edit Exhibit</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<ExhibitList />} />
        <Route path="/create_exhibit" element={<CreateExhibit />} />
        <Route path="/edit_exhibit" element={<EditExhibit />} />
        <Route path="/create_artifact" element={<CreateArtifact />} />
        <Route path="/artifactList" element={<ArtifactList />} />
        <Route path="/:artifact_id" element={<EditArtifact />} />
        <Route path="/edit_e/:exhibit_id" element={<EditExhibit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
