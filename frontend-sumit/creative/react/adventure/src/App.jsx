import React from "react";
import './App.css';
import Apicalling from './components/Apicalling';
import Footer from './components/Footer';
import Header from './components/Header';
import Homesection from './components/Homesection'
import AutoPlay from './components/Slider';
import ScrollToTop from './components/Topscroll'
import Sliders from "./components/Slider";

function App() {
  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Homesection></Homesection>
    <Footer></Footer>
    {/* <Sliders></Sliders> */}
    {/* <AutoPlay></AutoPlay> */}
    {/* <Apicalling></Apicalling> */}
    
    </>
  );
}



export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sliders from "./components/Slider";
// import TourPage from "./components/TourPage";
// import Homesection from './components/Homesection'

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homesection />} />
//         <Route path="/tour/:id" element={<TourPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
