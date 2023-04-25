import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import supabase from "./config/supabaseClient";

// pages
import ExhibitList from "./pages/ExhibitList"
import CreateExhibit from "./pages/create_exhibit"
import EditExhibit from "./pages/edit_exhibit";
import CreateArtifact from "./pages/create_artifact";
import ArtifactList from "./pages/artifactList";
import EditArtifact from "./pages/editArtifact";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import SetPassword from "./pages/set_password";
import RequestPasswordReset from "./pages/request_reset";
import NotFound from "./pages/not_found";
import RestrictedRoute from "./components/restricted_route";


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
          <Route path="/" element={<RestrictedRoute><ExhibitList /></RestrictedRoute>} />
          <Route path="/create_exhibit" element={<RestrictedRoute><CreateExhibit /></RestrictedRoute>} />
          <Route path="/edit_exhibit" element={<RestrictedRoute><EditExhibit /></RestrictedRoute>} />
          <Route path="/create_artifact" element={<RestrictedRoute><CreateArtifact /></RestrictedRoute>} />
          <Route path="/artifactList" element={ <RestrictedRoute><ArtifactList /></RestrictedRoute>} />
          <Route path="/:artifact_id" element={<RestrictedRoute><EditArtifact /></RestrictedRoute>} />
          <Route path="/ExhibitList" element={<RestrictedRoute><ExhibitList /></RestrictedRoute>}></Route>
          <Route path="/edit_e/:exhibit_id" element={<RestrictedRoute><EditExhibit /></RestrictedRoute>} />
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/request_reset" element={<RequestPasswordReset />}></Route>
          <Route path="/set_password" element={<SetPassword />}></Route>
          {/*<Route path="/not_found" element={<NotFound />}></Route>
          <Route path="/*" element={<NotFound />} />
          {/*<Route path="/:id" element={<Update />} />*/}
        </Routes>
    </BrowserRouter>
  );
}

export default App;