import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar-container">
                <img src={"https://www.pngplay.com/wp-content/uploads/4/Alphabet-M-PNG-Pic-Background.png"} alt="logo" style={{width: "96px"}}/>
                <ul>
                    <li><Link to={"/"}>Calendar</Link></li>
                    <li><Link to={"excel"}>Excel</Link></li>
                    <li><Link to={"bmw"}>BMW</Link></li>
                    <li><Link to={"create"}>Добавить менеджера</Link></li>
                    <li><Link to={"create_list"}>Добавить массив менеджеров</Link></li>
                    <li><Link to={"managers"}>Менеджеры</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
