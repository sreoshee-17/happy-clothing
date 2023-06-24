import React, { useContext, useState } from 'react'
import { Sidebarcontext } from '../Contexts/Sidebarcontext';
import { CartContext } from 'file:///E:/Projects/shopping-website/src/Contexts/CartContext.js';
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import { useEffect } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setisOpen} = useContext(Sidebarcontext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
      <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
        <div>
          <img className='w-[80px] h-[80px]' src={Logo} alt=''/>
        </div>
      </Link>
      <div onClick={() => setisOpen(!isOpen)} 
      className='cursor-pointer flex relative'>
        <BsBag className='text-2xl w-[30px] h-[30px]'/>
        <div className='bg-red-500 absolute -right-2-bottom-2 text-[12px] w-[18px] h-[18px]
        text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
        </div>
    </header>
  );
};

export default Header;