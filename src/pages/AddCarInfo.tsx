import React, {useState} from 'react';
import axios from "axios";
import {car_data} from "../assets/car_data";
import {car_specs_data} from "../assets/car_specs_data";

function AddCarInfo() {
    const [modelType, setModelType] = useState<string>('')
    const [info, setInfo] = useState<string>('')
    const [name, setName] = useState<string>('')
    const create = () => {
        let addedCar = car_data.find(c => c.name.toLowerCase() == name.toLowerCase().trim())
        let addedCarSpecs = car_specs_data.find(c => c.type.toLowerCase() == modelType.toLowerCase().trim())
        if (addedCar && addedCarSpecs) {
            let obj = {modelType, info: addedCarSpecs.info, _car_id: addedCar.id}
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