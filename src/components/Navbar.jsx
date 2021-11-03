import React from 'react';
import TriggerDarkMode from './TriggerDarkMode';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className='bg-black'>
      <ul className='text-white flex w-full justify-between my-5'>
        <li>Logo</li>
        <li>
          <TriggerDarkMode />
        </li>
        <li className='px-3'>
          <button
            onClick={() => loginWithRedirect()}
            className='bg-yellow-300 p-2 text-white rounded-lg shadow-md hover:bg-yellow-500'
          >
            Iniciar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;