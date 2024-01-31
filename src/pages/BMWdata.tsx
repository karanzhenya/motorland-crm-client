import React, {useState} from 'react';
import {read, utils} from "xlsx";

function BMWdata() {
    const [data, setData] = useState<any[]>()
    const readUploadFile = (e: any) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const data = e.target.result;
                const workbook = read(data, {type: "array"});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json: any = utils.sheet_to_json(worksheet);
                let arr: any = []
                let count = 0
                json.slice(2).forEach(function(item: any){
                    arr.push({article: item['АРТИКУЛ'], name: item['ЗАПЧАСТЬ'], newName: '', fullNumber: ''})
                })
                console.log(arr)
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