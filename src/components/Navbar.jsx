import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className="flex justify-between bg-gray-800 text-white font-semibold text-md py-5 px-10 max-sm:px-0 ">
                <li><Link to="/" className="hover:font-bold hover:text-green-500 ">Home</Link></li>
                <li><Link to="/login" className="hover:font-bold hover:text-green-500 ">Login/Register</Link></li>
                <li><Link to="/find" className="hover:font-bold hover:text-green-500 ">Find</Link></li>
                <li><Link to="/report" className="hover:font-bold hover:text-green-500 ">Report</Link></li>
            
                <li><Link to="/items" className="hover:font-bold hover:text-green-500 ">Items</Link></li>
                <li><Link to="/match" className="hover:font-bold hover:text-green-500 ">Match</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
