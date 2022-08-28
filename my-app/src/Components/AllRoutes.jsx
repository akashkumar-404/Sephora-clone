import { Route, Routes } from "react-router-dom";
import ReactLeafCarousel from "./Body";
import Cart from "./Cart";
import MakeUp from "./MakeUp";
import PrivateRoute from "../Components/PrivateRoute";
import SkinCare from "./SkinCare";




  function AllRoutes(){

    return (
        <>
        <Routes>
             <Route path="/" element={<ReactLeafCarousel /> }/>
            <Route path="/makeup" element={<MakeUp/>}/>
            <Route path="/skincare" element={<SkinCare/>}/>
            <Route path="/cart" element={
            <PrivateRoute>
              <Cart/>
            </PrivateRoute>
            
            }/>
        </Routes>
        </>
    )
  }
  export default AllRoutes
