import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar-container">
                <img src={"https://www.pngplay.com/wp-content/uploads/4/Alphabet-M-PNG-Pic-Background.png"} alt="logo" style={{width: "96px"}}/>
                <ul>
                    <li><Link to={"/"}>Calendar</Link></li>
                    {/*<li><Link to={"tasks"}>Tasks</Link></li>*/}
                    <li><Link to={"excel"}>Excel</Link></li>
                    <li><Link to={"bmw"}>BMW</Link></li>
                    <li><Link to={"create"}>Create</Link></li>
                    <li><Link to={"create_list"}>Add array</Link></li>
                    <li><Link to={"managers"}>Managers</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
