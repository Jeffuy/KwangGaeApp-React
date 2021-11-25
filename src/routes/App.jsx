import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import SelectorFormas from "@pages/SelectorFormas";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<SelectorFormas />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
