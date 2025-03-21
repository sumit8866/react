import React from 'react';
import { Link, outlet } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/shop"}>Shop</Link></li>
                    <li><Link to={"/cart"}>Cart</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    <li><Link to={"/contactus"}>ContactUs</Link></li>
                </ul>
            </nav>
            <main>
                <outlet/>
            </main>
        </div>
    );
}

export default Navbar;