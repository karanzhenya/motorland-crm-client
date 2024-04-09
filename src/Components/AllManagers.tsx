import React, {useEffect, useState} from 'react';
import {CreateManagerType, DepartmentType} from "../pages/CreateManager";
import ManagerList from "./ManagerList";
import DepartmentButtons from "./DepartmentButtons";
import axios from "axios";

export type ManagerType = CreateManagerType & {
    _id: string
}

function AllManagers() {
    const [department, setDepartment] = useState<DepartmentType>('Все')
    const [message, setMessage] = useState<string>('')
    const [managers, setManagers] = useState<ManagerType[]>([])

    const changeManagersList = (_id: string) => {
        setManagers(managers.filter(item => item._id !== _id))
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
    }, [setManagers])
    return (
        <div className={"managers-container"}>
            <DepartmentButtons setDepartment={setDepartment}/>
            <ManagerList managers={rezultManagers} setMessage={setMessage} setManagers={changeManagersList}/>
            {message && <div className='alert-message'>{message}</div>}
        </div>
    );
}

export default AllManagers;