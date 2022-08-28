import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AppContext";


function PrivateRoute({children}) {
  const {isAuth}=useContext(AuthContext)

      if(!isAuth){
       alert("Please Login First")
        return <Navigate to="/" />
      }
      
      return children

}

export default PrivateRoute;
