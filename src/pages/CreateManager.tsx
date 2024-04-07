import React, {useState} from 'react';
import axios from "axios";
import {SubmitHandler, useForm} from "react-hook-form";

export type CreateManagerType = {
    name: string,
    number: number,
    department: DepartmentType
}
export type DepartmentType = 'КЦ РФ' | 'КЦ РБ' | 'ПИ' | 'Все'

function CreateManager() {
    const [message, setMessage] = useState<string>('')
    const {register, handleSubmit, reset} = useForm<CreateManagerType>()
    const onSubmit: SubmitHandler<CreateManagerType> = (data: CreateManagerType) => {
        axios.post('https://managers-server.vercel.app/managers/create', {
            name: data.name.trim(),
            number: data.number,
            department: data.department
        }).then(res => {
            setMessage(`Менеджер ${res.data.name} был добавлен.`)
            reset()
        }).then(() => {
            setTimeout(() => {
                setMessage('')
            }, 4000)
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Введите имя' {...register('name', {required: true})}/>
                <input type={"number"} placeholder='Введите номер' {...register('number')}/>
                <select {...register('department', {required: true})}>
                    <option>КЦ РФ</option>
                    <option>КЦ РБ</option>
                    <option>ПИ</option>
                </select>
                <button type={"submit"} className='create-button'>Создать</button>
            </form>
            {message && <div className='alert-message'>{message}</div>}
        </div>
    );
}

export default CreateManager;