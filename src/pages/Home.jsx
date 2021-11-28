import React from "react";
import logo from "@logos/logo.png";
import "@styles/main.css";
import "@styles/style.css";

const Home = () => {
    return (
        <div>
            <div className="container">
                <header className="row">
                    <div className="col-lg-12 text-center">
                        <img
                            className="animate__animated animate__bounceIn logo"
                            src={logo}
                            alt="kwang-gae logo"
                        />
                    </div>
                </header>
            </div>
            <div className="container-fluid" id="about">
                <div className="row bg-dark text-white p-5 text-center">
                    <div className="col-sm-6">
                        <i className="fas fa-mobile-alt fa-10x" />
                    </div>
                    <div className="col-sm-6 pt-4">
                        <h3>La aplicación de Kwang-Gae</h3>
                        <p>
                            La mejor herramienta para mejorar tus clases de
                            Taekwon-Do. Arbitraje, selector de formas, desafíos,
                            información y videos. Desarrollado por profesores y
                            alumnos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
