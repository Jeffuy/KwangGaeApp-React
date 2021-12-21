import React, { useState } from "react";
import "@styles/main.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
    const [show, setShow] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    KwangGae App
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setShow(!show)}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                
                   
                    <div style={
                        show
                            ? { display: "block", animation: "gainOpacity 1s" }
                            : { display: "none"}
                    } className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
							
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                    onClick={() => setShow(!show)}
                                >
                                    <i className="fas fa-home" /> Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/selector"
                                    onClick={() => setShow(!show)}
                                >
                                    <i className="fas fa-random" /> Selector de
                                    formas
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/lucha"
                                    onClick={() => setShow(!show)}
                                >
                                    <i className="fas fa-fist-raised" />{" "}
                                    Arbitraje de Lucha
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/pattern"
                                    onClick={() => setShow(!show)}
                                >
                                    <i className="fas fa-calculator" />{" "}
                                    Arbitraje de Forma
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/desafios"
                                    onClick={() => setShow(!show)}
                                >
                                    <i className="fas fa-trophy" /> Challenges
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/quiz"
                                    onClick={() => setShow(!show)}
                                >
                                    <i className="fas fa-list-ol" />{" "}
                                    Cuestionario
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            
        </nav>
    );
};

export default Menu;
