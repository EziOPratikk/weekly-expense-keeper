import { useState } from 'react';

import { Link } from 'react-router-dom';

import hamburgerMenuIcon from '../../assets/icons/hamburger-menu.png';
import MainNavModal from '../../utils/MainNavModal.tsx';

export default function MainNavigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleHamburgerMenu() {
    setIsModalOpen((prevValue) => !prevValue);
  }

  return (
    <nav className='bg-[#be29ec] text-white w-[100%] flex justify-between sm:justify-around items-center p-10 shadow-md'>
      <h1 className='font-bold text-xl'>WEEKLY EXPENSE KEEPER</h1>
      <div className='text-sm'>
        <img
          src={hamburgerMenuIcon}
          alt='hamburger-menu-icon'
          aria-label='Menu'
          className='inline sm:hidden invert w-8 cursor-pointer'
          onClick={handleHamburgerMenu}
        />
        <ul className='hidden sm:flex gap-20'>
          <li className='cursor-pointer hover:text-[#F8ED62] hover:font-bold hover:translate-y-[-0.1rem] transition-all duration-200'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='cursor-pointer hover:text-[#F8ED62] hover:font-bold hover:translate-y-[-0.1rem] transition-all duration-200'>
            <Link to='/new-transaction'>EXPENSE ENTRY</Link>
          </li>
        </ul>
        <MainNavModal isOpen={isModalOpen} />
      </div>
    </nav>
  );
}