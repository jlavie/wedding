import React, { useState } from "react";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = [
        'image/png',
        'image/jpeg'
    ];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)) {
            console.log(selected);
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Mauvais format de fichier');
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
            { error && <div className="error">{error}</div> }
            { file && <div>{file.name}</div> }
            </div>
        </form>
    )
}

export default UploadForm;