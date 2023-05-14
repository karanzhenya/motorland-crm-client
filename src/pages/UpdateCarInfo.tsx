import React, {useState} from 'react';
import axios from "axios";

type CarInfoType = {
    modelType: string,
    info: string,
    _car_id: string
}

function UpdateCarInfo() {
    const [modelType, setModelType] = useState<string>('')
    const [info, setInfo] = useState<string>('')
    const [carId, setCarId] = useState<string>('')
    const [id, setId] = useState<string>('')
    const update = () => {
        const obj: CarInfoType = {
            modelType,
            info,
            _car_id: carId
        }
        axios.put(`https://cars-express-back.vercel.app/update/${id}`, {...obj}).then((res) => {
            console.log(res.data)
            setModelType('')
            setInfo('')
            setCarId('')
            setId('')
        })
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
                <textarea value={carId} placeholder='_car_id' onChange={(e) => {
                    setCarId(e.currentTarget.value)
                }}/>
                <textarea value={id} placeholder='id' onChange={(e) => {
                    setId(e.currentTarget.value)
                }}/>
                <button onClick={update}>update</button>
            </div>
        </div>
    );
}

export default UpdateCarInfo;