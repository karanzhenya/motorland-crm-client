import React, {ChangeEvent, useState} from 'react';
import axios from "axios";
import {CreateManagerType} from "./CreateManager";
import instruction from '../assets/images/instruction.png'

function AddManagersList() {
    const [message, setMessage] = useState<string>('')
    const [array, setArray] = useState<string>('')
    const sendArray = () => {
        const data = JSON.parse(array)
        data.forEach((item: CreateManagerType) => axios.post('http://localhost:5555/managers/create', {...item}).then(() => {
            setMessage(`Массив менеджеров был добавлен`)

        }).then(() => {
            setArray(``)
            setTimeout(() => {
                setMessage('')
            }, 4000)
        }))

    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setArray(e.currentTarget.value)
    }
    return (
        <div className='form-container'>
            <p className={'instruction-text'}>Массив с JSON (пример формата)</p>
            <img src={instruction} alt={'instruction'} className={'instruction-image'}/>
            <textarea onChange={onChangeHandler} rows={30} cols={100} className='text-area'/>
            <button onClick={sendArray} className='create-button'>Создать</button>
            {message && <div className='alert-message'>{message}</div>}
        </div>
    );
}

export default AddManagersList;