import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // ref ou est sauvegardé le fichier
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totleBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            // lancée quand le put est complete
            // async car on utilise await dans la fonction
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error }
}

export default useStorage;