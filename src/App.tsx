import './App.css'
import Tasks from "./pages/Tasks";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import FunPage from "./pages/FunPage";
import React from "react";

function App() {
    return (
        <div className="app">
            <div className="app-container">
                <Navbar/>
                <Routes>
                    <Route path={'/tasks'} element={<Tasks/>}/>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/fun'} element={<FunPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
