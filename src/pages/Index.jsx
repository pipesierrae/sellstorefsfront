import { useDarkMode } from 'context/darkMode';
import React from 'react';
import Car from 'media/cardeluxe.png';

const Index = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`flex h-full bg-black-${darkMode ? '900' : '50'}`}>
      <h1 className='text-white text-center font-extrabold bg-gray-900'>¡¡¡Los Mejores Autos!!!</h1>
      <img className='mx-auto h-70 w-auto' src={Car} alt='Workflow' />
    </div>
  );
};

export default Index;