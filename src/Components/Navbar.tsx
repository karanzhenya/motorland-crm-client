import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
   /* const [value, setValue] = useState<string>('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const setPass = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode == 1) {
            insertPass(value)
        }
        setValue('')
    }*/
    return (
        <div className="navbar">
            <nav className="navbar-container">
                <img src={"https://media.istockphoto.com/id/1393504780/photo/m-letter-red-sign-3d-capital-letter-rendering.jpg?s=1024x1024&w=is&k=20&c=mYSXMkSnjg98vkflILCMPbMs5ZnCDLz5uCjfybLcfl4="} alt="logo"/>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"tasks"}>Tasks</Link></li>
                    <li><Link to={"excel"}>Excel</Link></li>
                    <li><Link to={"login"}>Login</Link></li>
                    <li><Link to={"registration"}>Registration</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
