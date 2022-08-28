import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import MakeUp from './Components/MakeUp';
import SkinCare from './Components/SkinCare';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import ReactLeafCarousel from './Components/Body';



function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        {/* <ReactLeafCarousel /> */}
        <AllRoutes/>

      {/* <MakeUp /> */}
      {/* <SkinCare/> */}
      
     
    </div>
  );
}

export default App;
