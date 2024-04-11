import React from 'react';
import {ManagerType} from "../pages/Managers";
import Manager from "./Manager";

export type ManagersProps<D> = {
    data: D,
    setMessage: (message: string) => void,
    setManagers: (_id: string) => void
}

function ManagerList({data, setMessage, setManagers}: ManagersProps<ManagerType[]>) {
    return (
        <ul className={'managers-list'}>
            {data.map((item: ManagerType) => <Manager key={item._id} data={item} setMessage={setMessage}
                                                          setManagers={setManagers}/>)}
        </ul>
    );
}

export default ManagerList;