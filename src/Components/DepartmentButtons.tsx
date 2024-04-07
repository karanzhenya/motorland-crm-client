import React from 'react';
import {DepartmentType} from "../pages/CreateManager";

type DepartmentButtonsProps = {
    setDepartment: (department: DepartmentType) => void
}

function DepartmentButtons({setDepartment}: DepartmentButtonsProps) {
    return (
        <div className={'button-container'}>
            <button className={'create-button'} onClick={() => setDepartment("КЦ РФ")}>КЦ РФ</button>
            <button className={'create-button'} onClick={() => setDepartment("КЦ РБ")}>КЦ РБ</button>
            <button className={'create-button'} onClick={() => setDepartment("ПИ")}>ПИ</button>
            <button className={'create-button'} onClick={() => setDepartment("Все")}>Все</button>
        </div>
    );
}

export default DepartmentButtons;