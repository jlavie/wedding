import { useState, useEffect } from "react";
import { projectStorage, projectStorageRef } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // ref ou est sauvegardé le fichier
        const storageRef = ref(projectStorage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setProgress(progress );
        }, (error) => {
            setError(error);
        }, async () => {
            // lancée quand le put est complete
            // async car on utilise await dans la fonction
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            setUrl(url);
            console.log('File available at', url);
        });
    }, [file]);

    return { progress, url, error }
}

export default useStorage;