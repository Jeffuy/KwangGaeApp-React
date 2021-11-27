import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import SelectorFormas from "@pages/SelectorFormas";
import Lucha from "@pages/Lucha";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<SelectorFormas />} />
                    <Route exact path="/lucha/" element={<Lucha />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
