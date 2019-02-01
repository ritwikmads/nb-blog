import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navlinks = () =>{
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 pad-t-b-20">
                <ul className="nav flex-column">
                    <li className="nav-item nav-li">
                        <NavLink to="/" className="nav-a-col">Home</NavLink>
                    </li>
                    <li className="nav-item nav-li">
                        <NavLink to="/about" className="nav-a-col">About</NavLink>
                    </li>
                    <li className="nav-item nav-li">
                        <NavLink to="/blogs" className="nav-a-col">Blogs</NavLink>
                    </li>
                    <li className="nav-item nav-li">
                        <NavLink to="/gallery" className="nav-a-col">Gallery</NavLink>
                    </li>
                    <li className="nav-item nav-li">
                        <NavLink to="/contact" className="nav-a-col">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-md-2"></div>
        </div>
      );
}

export default Navlinks;