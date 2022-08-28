import { createContext, useState, useEffect } from "react"; 
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/config";

const UserContext = createContext();

function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);
    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    })

    const signUp = (email, pwd) => {
        createUserWithEmailAndPassword(auth, email, pwd)
    }

    const toggleModals = modal => {
        if(modal === 'signIn') {
            setModalState({ signUpModal: false, signInModal: true })
        }
        if(modal === 'signUp') {
            setModalState({ signUpModal: true, signInModal: false })
        }
        if(modal === 'close') {
            setModalState({ signUpModal: false, signInModal: false })
        }
    }

    return (
        <UserContext.Provider value={{modalState, toggleModals, signUp}}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };