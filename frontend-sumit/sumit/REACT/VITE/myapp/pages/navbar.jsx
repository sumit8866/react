import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className='flex justify-evenly bg-purple-500 text-white text-xl'>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/shop">Shop</Link>
                <Link to="*">Error</Link>
            </nav>
        </div>
    );
}

export default Navbar;