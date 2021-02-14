import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useMyCustommHook } from './context';

const Home = () => {
  const { openSidebar, openModal } = useMyCustommHook();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
