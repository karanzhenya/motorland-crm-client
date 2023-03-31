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
                <img src={"https://1.downloader.disk.yandex.ru/preview/82b5f6f1497ab68ffcf482e8360961da8251624082a41cc0671a9d0704c47132/inf/gFJlwCaK0ZXlURoOD-zfWSp2-XmmUeuSXzBiGlgURovbGqCfHniGLdh5LOoKIpvNzWuOyWXqBRJXEyyxvo-1PA==?uid=220232774&filename=_MG_8631.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=220232774&size=1920x969"} alt="logo"/>
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
