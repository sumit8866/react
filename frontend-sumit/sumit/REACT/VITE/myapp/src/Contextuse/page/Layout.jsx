import React from 'react';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Profile from './Profile';
import ContactUS from './ContactUS.JSX';
import Error from './Error';
import Navbar from './Navbar';
import { createBrowserRouter , createRoutesFromElements , RouterProvider , Route} from 'react-router-dom'


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<Error/>}/>
        </Route>
    )
)

function Layout() {
    return (
        <div>
            <RouterProvider/>
        </div>
    );
}

export default Layout;