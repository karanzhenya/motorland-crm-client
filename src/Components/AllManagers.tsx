import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CreateManagerType, DepartmentType} from "../pages/CreateManager";
import ManagerList from "./ManagerList";
import DepartmentButtons from "./DepartmentButtons";

export type ManagerType = CreateManagerType & {
    _id: string
}

function AllManagers() {
    const [department, setDepartment] = useState<DepartmentType>('Все')
    const [message, setMessage] = useState<string>('')
    const [managers, setManagers] = useState<ManagerType[]>([])

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
    }, [message])
    console.log('managers')
    return (
        <div className={"managers-container"}>
            <DepartmentButtons setDepartment={setDepartment}/>
            <ManagerList managers={rezultManagers} setMessage={setMessage}/>
            {message && <div className='alert-message'>{message}</div>}
        </div>
    );
}

export default AllManagers;