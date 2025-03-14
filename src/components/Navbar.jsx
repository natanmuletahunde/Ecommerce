import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      {/* Logo */}
      <img src={assets.logo} className='w-36' alt="Logo" />

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 text-blue-600' : 'flex flex-col items-center gap-1'}>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink to='/collection' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 text-blue-600' : 'flex flex-col items-center gap-1'}>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 text-blue-600' : 'flex flex-col items-center gap-1'}>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 text-blue-600' : 'flex flex-col items-center gap-1'}>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
      </ul>
               <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
               </div>
          <div  className='group relative'>
            <img src={assets.profile_icon}  className='w-5 cursor-pointer' alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                     <p className='cursor-pointer hover:text-black'> My Profile</p>
                     <p className='cursor-pointer hover:text-black'>Orders</p>
                     <p className='cursor-pointer hover:text-black'> Logo</p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Navbar;
