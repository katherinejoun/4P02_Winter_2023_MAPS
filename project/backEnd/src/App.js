import { BrowserRouter, Routes, Route, Switch, Navigate } from "react-router-dom"
import supabase from "./config/supabaseClient";

// pages
import ExhibitList from "./pages/exhibitList"
import CreateExhibit from "./pages/create_exhibit"
import EditExhibit from "./pages/edit_exhibit";
import CreateArtifact from "./pages/create_artifact";
import ArtifactList from "./pages/artifactList";
import EditArtifact from "./pages/editArtifact";
import Login from "./pages/signin";
import Register from "./pages/signup";
import SetPassword from "./pages/set_password";
import RequestPasswordReset from "./pages/request_reset";
import NotFound from "./pages/not_found";

import RestrictedRoute from "./components/restricted_route";
import { AuthProvider } from "./components/auth";
import { useContext, useState, useEffect } from "react";

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

      <AuthProvider>
        <Routes>          
          <Route exact path="/" element={<RestrictedRoute><ExhibitList /></RestrictedRoute>} />
          <Route path="/create_exhibit" element={<RestrictedRoute><CreateExhibit /></RestrictedRoute>} />
          <Route path="/edit_exhibit" element={<RestrictedRoute><EditExhibit /></RestrictedRoute>} />
          <Route path="/create_artifact" element={<RestrictedRoute><CreateArtifact /></RestrictedRoute>} />
          <Route path="/artifactList" element={ <RestrictedRoute><ArtifactList /></RestrictedRoute>} />
          <Route path="/:artifact_id" element={<RestrictedRoute><EditArtifact /></RestrictedRoute>} />
          <Route path="/ExhibitList" element={<RestrictedRoute><ExhibitList /></RestrictedRoute>}></Route>
          <Route path="/create_poi" element={ <RestrictedRoute><CreatePoi /></RestrictedRoute>} />
          <Route path="/Edit_poi" element={<RestrictedRoute><EditPoi /></RestrictedRoute>}></Route>
          <Route path="/edit_e/:exhibit_id" element={<RestrictedRoute><EditExhibit /></RestrictedRoute>} />
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/request_reset" element={<RequestPasswordReset />}></Route>
          <Route path="/set_password" element={<RestrictedRoute><SetPassword /></RestrictedRoute>}></Route>
          <Route path="/not_found" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="/not_found" />} />
          {/*<Route path="/:id" element={<Update />} />*/}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;