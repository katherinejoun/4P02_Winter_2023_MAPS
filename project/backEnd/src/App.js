import { BrowserRouter, Routes, Route, Switch, Navigate } from "react-router-dom"
import supabase from "./config/supabaseClient";

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
import NotFound from "./pages/not_found";

import RestrictedRoute from "./components/restricted_route";
import { AuthProvider } from "./components/auth";
import { useContext, useState, useEffect } from "react";

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
      <AuthProvider>
        <Routes>          
          <Route exact path="/" element={<RestrictedRoute><ExhibitList /></RestrictedRoute>} />
          <Route path="/create_poi" element={<RestrictedRoute><CreatePoi /></RestrictedRoute>} />
          <Route path="/Edit_poi" element={<RestrictedRoute><EditPoi /></RestrictedRoute>} />
          <Route path="/create_artifact" element={<RestrictedRoute><CreateArtifact /></RestrictedRoute>} />
          <Route path="/artifactList" element={ <RestrictedRoute><ArtifactList /></RestrictedRoute>} />
          <Route path="/:artifact_id" element={<RestrictedRoute><EditArtifact /></RestrictedRoute>} />
          <Route path="/ExhibitList" element={<RestrictedRoute><ExhibitList /></RestrictedRoute>}></Route>
          <Route path="/create_poi" element={ <RestrictedRoute><CreatePoi /></RestrictedRoute>} />
          <Route path="/Edit_poi" element={<RestrictedRoute><EditPoi /></RestrictedRoute>}></Route>
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