import React, {useState} from 'react';
import {read, utils} from "xlsx";

type RezultDataType = {
    number: string,
    name: string,
    newName: string,
    fullNumber: string
}

function BMWdata() {
    const readUploadFile = (e: any) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target) {
                    const data = e.target.result;
                    const workbook = read(data, {type: "array"});
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const json: any = utils.sheet_to_json(worksheet);
                    let arr: RezultDataType[] = []
                    json.slice(0).forEach((item: any) => arr.push({
                            number: item['ОРИГИНАЛЬНЫЙ НОМЕР'],
                            fullNumber: '',
                            name: item['ЗАПЧАСТЬ'],
                            newName: ''
                        })
                    )
                    console.log(arr)
                }
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
    return (
        <div className="fun">
            <div className="fun-container">
                <form>
                    <label htmlFor="upload">Upload File</label>
                    <input
                        type="file"
                        name="upload"
                        id="upload"
                        onChange={readUploadFile}
                    />
                </form>
            </div>
        </div>
    );
}

export default BMWdata;
