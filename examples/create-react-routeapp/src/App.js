import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main";
import Second from "./components/Second";
function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/second" element={<Second />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
