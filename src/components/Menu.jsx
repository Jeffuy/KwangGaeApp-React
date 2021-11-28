import React from "react";
import "@styles/main.css"
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Taekwon-Do I.T.F. App
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="fas fa-home" /> Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about">
                                <i className="fas fa-building" /> About
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/selector">
                                <i className="fas fa-random" /> Selector de
                                formas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/lucha">
                                <i className="fas fa-fist-raised" /> Arbitraje
                                de Lucha
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/arbitraje-forma">
                                <i className="fas fa-calculator" /> Arbitraje de
                                Forma
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/challenges">
                                <i className="fas fa-trophy" /> Challenges
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cuestionario">
                                <i className="fas fa-list-ol" /> Cuestionario
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;