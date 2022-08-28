import React, {useContext} from 'react';
import { UserContext } from '../context/userContext';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const {toggleModals} = useContext(UserContext);

  return (
    <nav className='navbar navbar-light px-4'>
        <Link to="/" className="navbar-brand title"><h1>FireGram</h1></Link>
    
        <div>
            <button
              onClick={() => toggleModals('signUp')}
              className='btn btn-primary'>Sign up</button>
            <button
              onClick={() => toggleModals('signIn')}
              className='btn btn-secondary ms-2'>Sign in</button>
            <button className='btn btn-danger ms-2'>Log out</button>
        </div>
    </nav>
  )
}

export default Navbar;