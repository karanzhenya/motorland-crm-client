import './App.css'
import Tasks from "./pages/Tasks";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import ExcelConverter from "./pages/ExcelConverter";
import CreateManager from "./pages/CreateManager";
import BMWdata from "./pages/BMWdata";
import AllManagers from "./pages/Managers";
import AddManagerList from "./pages/AddManagerList";

function App() {
    return (
        <div className="app">
                <Navbar/>
                <hr/>
                <Routes>
                    <Route path={'/tasks'} element={<Tasks/>}/>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/excel'} element={<ExcelConverter/>}/>
                    <Route path={'/bmw'} element={<BMWdata/>}/>
                    <Route path={'/create'} element={<CreateManager/>}/>
                    <Route path={'/create_list'} element={<AddManagerList/>}/>
                    <Route path={'/managers'} element={<AllManagers/>}/>
                </Routes>
        </div>
    )
}

export default App
