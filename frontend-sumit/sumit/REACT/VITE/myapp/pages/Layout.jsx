import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Pages from './pages';
import Login from './Login';
import Error from './Error';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './navbar';


function Layout() {
    return (
       <>
            
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/pages" element={<Pages/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>

       </>
    )
}
export default Layout