import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CreateManagerType, DepartmentType} from "../pages/CreateManager";

export type ManagerType = CreateManagerType & {
    _id: string
}

function AllManagers() {
    const [department, setDepartment] = useState<DepartmentType>('Все')
    const [message, setMessage] = useState<string>('')
    const [managers, setManagers] = useState<ManagerType[]>([])
    const removeManager = (id: string) => {
        axios.delete('https://managers-server.vercel.app/managers/delete', {data: {id}}).then(res => {
            setMessage(`Менеджер ${res.data.name} был удалён`)
        }).then(() => {
            setTimeout(() => {
                setMessage('')
            }, 3000)
        })
    }
    let rezultManagers = managers
    if (department === 'КЦ РФ') {
        rezultManagers = managers.filter(item => item.department === 'КЦ РФ')
    }
    if (department === 'КЦ РБ') {
        rezultManagers = managers.filter(item => item.department === 'КЦ РБ')
    }
    if (department === 'ПИ') {
        rezultManagers = managers.filter(item => item.department === 'ПИ')
    }
    if (department === 'Все') {
        rezultManagers = managers
    }
    useEffect(() => {
        axios.get('https://managers-server.vercel.app/managers').then(res => {
            setManagers(res.data)
        })
    }, [removeManager])
    return (
        <div className={"managers-container"}>
            <div className={'button-container'}>
                <button className={'create-button'} onClick={() => setDepartment("КЦ РФ")}>КЦ РФ</button>
                <button className={'create-button'} onClick={() => setDepartment("КЦ РБ")}>КЦ РБ</button>
                <button className={'create-button'} onClick={() => setDepartment("ПИ")}>ПИ</button>
                <button className={'create-button'} onClick={() => setDepartment("Все")}>Все</button>
            </div>
            <ul className={'managers-list'}>
                {rezultManagers.map(item => <li key={item._id} className={'manager'}>
                    <span>{item.name}</span>
                    <span>{item.number}</span>
                    <span>{item.department}</span>
                    <button onClick={() => removeManager(item._id)} className='remove-button'>X</button>
                </li>)}

            </ul>
            {message && <div className='alert-message'>{message}</div>}
        </div>
    );
}

export default AllManagers;