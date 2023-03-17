import React, {useState} from 'react';
import {read, utils} from "xlsx";

function ExcelConverter() {
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
                setData(json.slice(2));
                console.log(json.slice(2))
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
                <div className="content">
                    {data !== undefined && data.length > 0?<table>
                        <tr>
                            <th>article</th>
                            <th>№ car</th>
                            <th>name</th>
                            <th>description</th>
                            <th>internal description</th>
                            <th>place</th>
                            <th>date</th>
                        </tr>
                        {data === undefined ? null : data.map((d: any) =>
                            <>
                                <tr key={d.name}>
                                    <td>{d.__EMPTY}</td>
                                    <td>{d.__EMPTY_2}</td>
                                    <hr/>
                                </tr>
                            </>
                        )}
                    </table>: null}

                </div>
            </div>
        </div>
    );
}

export default ExcelConverter;
