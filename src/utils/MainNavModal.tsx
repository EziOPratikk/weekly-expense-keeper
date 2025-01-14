import { Link } from 'react-router-dom';

import homeImg from '../assets/icons/home.png';
import expenseEntryImg from '../assets/icons/expense-entry.png';

type MainNavModalProps = {
  isOpen: boolean;
};

export default function MainNavModal(props: MainNavModalProps) {
  return (
    <div
      className={`${
        props.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } bg-[#be29ec] shadow-sm rounded-sm w-28 absolute right-0 top-24 h-52 transition-all duration-300 ease-in-out`}
    >
      <ul className='flex flex-col justify-center text-center gap-8 h-full px-2 text-sm'>
        <li className='cursor-pointer relative group'>
          <Link to='/'>
            <img src={homeImg} alt='home-icon' className='w-8 mx-auto invert' />
          </Link>
          <div className='text-xs bg-[#fdf697] w-fit p-1 rounded-sm text-black absolute left-2 top-10 opacity-0 group-hover:opacity-90 transition-opacity duration-300'>
            HOME
          </div>
        </li>
        <li className='cursor-pointer relative group'>
          <Link to='/new-transaction'>
            <img
              src={expenseEntryImg}
              alt='expense-entry-icon'
              className='w-8 mx-auto invert'
            />
          </Link>
          <div className='text-xs bg-[#fdf697] w-28 py-1 rounded-sm text-black absolute -left-4 top-10 opacity-0 group-hover:opacity-90 transition-opacity duration-300'>
            EXPENSE ENTRY
          </div>
        </li>
      </ul>
    </div>
  );
}