import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./routes/login";
import Home from "./routes/home";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route exact path='/home' element={<Home />}/>
            </Routes>
        </div>
    );
}
export default App;