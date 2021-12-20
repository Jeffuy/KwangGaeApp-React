import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import PatternSelector from "@pages/PatternSelector";
import Fight from "@pages/Fight";
import Home from "@pages/Home";
import Challenge from "@pages/Challenge";
import Quiz from "@pages/Quiz";
import Pattern from "@pages/Pattern";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/selector" element={<PatternSelector />} />
					<Route path="/pattern" element={<Pattern />} />
                    <Route path="/lucha" element={<Fight />} />
                    <Route path="/desafios" element={<Challenge />} />
					<Route path="/quiz" element={<Quiz />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
