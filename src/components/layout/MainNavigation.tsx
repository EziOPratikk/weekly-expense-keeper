import { Link } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <nav className='bg-[#be29ec] text-white w-[100%] flex justify-around items-center p-10 shadow-md'>
      <h1 className='font-bold text-xl'>WEEKLY EXPENSE KEEPER</h1>
      <div className='text-sm'>
        <ul className='flex gap-20'>
          <li className='cursor-pointer hover:text-[#F8ED62] hover:font-bold hover:translate-y-[-0.1rem] transition-all duration-200'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='cursor-pointer hover:text-[#F8ED62] hover:font-bold hover:translate-y-[-0.1rem] transition-all duration-200'>
            <Link to='/new-transaction'>EXPENSE ENTRY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}