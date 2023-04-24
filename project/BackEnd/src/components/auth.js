import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [ userSession, setUserSession ] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { userSession } }) => {
      setUserSession(userSession)
    })

  supabase.auth.onAuthStateChange((_event, userSession) => {
      setUserSession(userSession)
    })
  }, [])

  return <AuthContext.Provider value={userSession}>{children}</AuthContext.Provider>
}