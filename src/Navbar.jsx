import React from "react";
import { NavLink } from "react-router-dom";
import './Css.css';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto"> 
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <p>Help!mee</p>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item ">
                                            <NavLink activeClassName="active_menu" className="nav-link " exact to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active_menu" className="nav-link" exact to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active_menu" className="nav-link" exact to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active_menu" className="nav-link" exact to="/contact">Contact</NavLink>
                                        </li>
                                        {/* <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </NavLink>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                                            </ul>
                                        </li> */}
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar;