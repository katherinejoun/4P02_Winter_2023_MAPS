import { Navigate } from "react-router-dom";
import authenticatedUser from "./auth";

const RestrictedRoute = ({children}) => {
 const session = authenticatedUser();

  if (session === null) {
    return <Navigate to="/signin" />;
  }
  else {
    return children;
  }
}
export default RestrictedRoute;