import React from 'react';
import axios from "axios";
import {ManagerType} from "./AllManagers";

type ManagerListProps = {
    managers: ManagerType[],
    setMessage: (message: string) => void,
    setManagers: (_id: string) => void
}

function ManagerList({managers, setMessage, setManagers}: ManagerListProps) {

    const removeManager = (id: string) => {
        axios.delete('https://managers-server.vercel.app/managers/delete', {data: {id}}).then(res => {
            setManagers(id)
            setMessage(`Менеджер ${res.data.name} был удалён`)
        }).then(() => {
            setTimeout(() => {
                setMessage('')
            }, 3000)
        })
    }
    return (
        <ul className={'managers-list'}>
            {managers.map((item: ManagerType) => <li key={item._id} className={'manager'}>
                <span>{item.name}</span>
                <span>{item.number}</span>
                <span>{item.department}</span>
                <button onClick={() => removeManager(item._id)} className='remove-button'>X</button>
            </li>)}
        </ul>
    );
}

export default ManagerList;