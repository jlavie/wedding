import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFirestore = (coll) => {
    const [elements, setElements] = useState([]);
    const collectionRef = query(collection(db, coll));
    
    useEffect(() => {
        const unsub = onSnapshot(collectionRef, (querySnapshot) => {
            const el = [];
            querySnapshot.forEach((doc) => {
                el.push({ ...doc.data(), id: doc.id });
            });
            setElements(el);
        });

        return () => unsub();
    }, [coll])
    return { elements }
}

export default useFirestore;