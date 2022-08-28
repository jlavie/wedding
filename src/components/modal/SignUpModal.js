import React, {useContext, useRef, useState} from 'react';
import { UserContext } from '../../context/userContext';

const SignUpModal = () => {
    const {modalState, toggleModals, signUp} = useContext(UserContext);
    const [validation, setValidation] = useState("");

    const formRef = useRef();
    const inputs = useRef([]);
    const addInputs = el => {
        if(el && !inputs.current.includes(el)) {
            inputs.current[el.name] = el;
        }
    }

    const handleForm = async (e) => {
        e.preventDefault();
        if((inputs.current['password'].value.length || inputs.current['repeat-password'].value.length) < 6) {
            setValidation ('6 caractères minimum');
            return;
        } else if(inputs.current['password'].value !== inputs.current['repeat-password'].value) {
            setValidation ('Pas le même mot de passe');
            return;
        }

        try {
            const cred = await signUp(
                inputs.current['email'].value,
                inputs.current['password'].value
            )
            formRef.current.reset();
            setValidation("");
        } catch(err) {
            //console.dir(err);
            if(err.code === 'auth/invalid-email') {
                setValidation("Le format d'email est invalide");
            }
            if(err.code === 'auth/email-already-in-use') {
                setValidation("L'email est déjà utilisée");
            }
        }
    }

    const closeModal = () => {
        setValidation('');
        toggleModals('close');
    }

  return (
    <>
    {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100" style={{zIndex: "1" }}>
            <div 
                onClick={closeModal}
                className='w-100 h-100 bg-dark bg-opacity-75'>
            </div>
            <div className='position-absolute top-50 start-50 translate-middle' style={{minWidth: "500px", background: "#fff" }}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>S'enregistrer</h5>
                            <button className='btn-close' onClick={closeModal}></button>
                        </div>

                        <div className='modal-biody'>
                            <form ref={formRef} onSubmit={handleForm} className='sign-up-form' style={{display: 'flex'}}>
                                <div className='mb-3'>
                                    <label htmlFor='signUpEmail'>Email</label>
                                    <input ref={addInputs} type="email" name='email' required className='form-control' id='signUpEmail' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='signUpPassword'>Password</label>
                                    <input ref={addInputs} type="password" name='password' required className='form-control' id='signUpPassword' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='repeatPassword'>Repeat password</label>
                                    <input ref={addInputs} type="password" name='repeat-password' required className='form-control' id='repeatPassword' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='signUpUsername'>Username</label>
                                    <input ref={addInputs} type="text" name='username' required className='form-control' id='signUpUsername' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='signUpFirstname'>First name</label>
                                    <input ref={addInputs} type="text" name='firstname' required className='form-control' id='signUpFirstname' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='signUpLastname'>Password</label>
                                    <input ref={addInputs} type="text" name='lastname' required className='form-control' id='signUpLastname' />
                                </div>
                                <div className='mb-3'>
                                    <p className='text-danger mt-1'>{validation}</p>
                                </div>

                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
  )
}

export default SignUpModal;