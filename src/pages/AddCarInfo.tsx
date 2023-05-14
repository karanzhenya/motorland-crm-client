import React, {useState} from 'react';
import axios from "axios";
import {car_data} from "../assets/car_data";

function AddCarInfo() {
    const [modelType, setModelType] = useState<string>('')
    const [info, setInfo] = useState<string>('')
    const [name, setName] = useState<string>('')
    const create = () => {
        let changedCar = car_data.find(c => c.name.toLowerCase() == name.toLowerCase().trim())
        if (changedCar) {
            let obj = {modelType, info, _car_id: changedCar.id}
            axios.post('https://cars-express-back.vercel.app/carspecs', {...obj}).then((res) => {
                console.log(res.data)
                setModelType('')
                setInfo('')
                setName('')
            })
        }
    }

    return (
        <div className="add-car-info">
            <div className="add-car-info-container">
                <textarea value={modelType} placeholder='modelType' onChange={(e) => {
                    setModelType(e.currentTarget.value)
                }}/>
                <textarea value={info} placeholder='info' onChange={(e) => {
                    setInfo(e.currentTarget.value)
                }}/>
                <textarea value={name} placeholder='name' onChange={(e) => {
                    setName(e.currentTarget.value)
                }}/>
                <button onClick={create}>create</button>
            </div>
        </div>
    );
}

export default AddCarInfo;