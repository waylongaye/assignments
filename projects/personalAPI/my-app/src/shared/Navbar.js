import React from 'react';
// import Home from "./Home.js/index.js"
// import About from "./About.js/index.js"
// import Inspire from "./Inspire.js/index.js"
import {Link} from "react-router-dom"



function Navbar (props){ 
    return (
        <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/inspire">Get Inspired Again</Link>
            </div>
        );
    
}

export default Navbar;