import React from 'react';
import {ManagerType} from "../pages/Managers";
import axios from "axios";
import {ManagersProps} from "./ManagerList";

function Manager({data, setManagers, setMessage}: ManagersProps<ManagerType>) {
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
        <li key={data._id} className={'manager'}>
            <span>{data.name}</span>
            <span>{data.number}</span>
            <span>{data.department}</span>
            <button onClick={() => removeManager(data._id)} className='remove-button'>X</button>
        </li>
    );
}

export default Manager;