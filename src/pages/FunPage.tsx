import React from 'react';
import {writeXLSX, utils, read} from "xlsx";

function FunPage() {
    const readUploadFile = (e: any) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const data = e.target.result;
                const workbook = read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = utils.sheet_to_json(worksheet);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
    return (
        <div className="fun">
            <div className="fun-container"><form>
                <label htmlFor="upload">Upload File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                />
            </form></div>
        </div>
    );
}

export default FunPage;