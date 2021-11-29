import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import SelectorFormas from "@pages/SelectorFormas";
import Lucha from "@pages/Lucha";
import Home from "@pages/Home";
import Challenge from "@pages/Challenge";
import NotStart from "@components/NotStart";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/selector" element={<SelectorFormas />} />
                    <Route path="/prueba" element={<div>Test URL</div>}/>
                    <Route path="/lucha" element={<Lucha />} />
                    <Route path="/desafios" element={<Challenge />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
