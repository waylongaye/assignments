import React from 'react';
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <div className="header">
            <h1>
                Welcome to Inspire!
                {<Link className="link" to="/inspire">Get Inspired</Link>}

            </h1>
        </div>
    );
};

export default Header;