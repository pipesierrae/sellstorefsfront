import { useDarkMode } from 'context/darkMode';
import React from 'react';

const Index = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`flex h-full bg-gray-${darkMode ? '900' : '50'}`}>
      <h1 className='text-center font-extrabold justify-center'>¡¡¡Los Mejores Autos!!!</h1>
    </div>
  );
};

export default Index;