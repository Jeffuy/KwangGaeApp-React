import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import SelectorFormas from "@pages/SelectorFormas";
import Lucha from "@pages/Lucha";
import Home from "@pages/Home";
import Challenge from "@pages/Challenge";
import Test from "@pages/test";
import Quiz from "@pages/Quiz";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/selector" element={<SelectorFormas />} />
                    <Route path="/prueba" element={<Test />} />
                    <Route path="/lucha" element={<Lucha />} />
                    <Route path="/desafios" element={<Challenge />} />
					<Route path="/quiz" element={<Quiz />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
