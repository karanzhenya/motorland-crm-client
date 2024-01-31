import './App.css'
import Tasks from "./pages/Tasks";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ExcelConverter from "./pages/ExcelConverter";
import AddCarInfo from "./pages/AddCarInfo";
import UpdateCarInfo from "./pages/UpdateCarInfo";
import BMWdata from "./pages/BMWdata";

function App() {
    return (
        <div className="app">
            <div className="app-container">
                <Navbar/>
                <hr/>
                <Routes>
                    <Route path={'/tasks'} element={<Tasks/>}/>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/excel'} element={<ExcelConverter/>}/>
                    <Route path={'/bmw'} element={<BMWdata/>}/>
                    <Route path={'/create'} element={<AddCarInfo/>}/>
                    <Route path={'/update'} element={<UpdateCarInfo/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
