import React from 'react'
import { Link } from 'react-router-dom';
import coverImg from '../images/coverImg.png'
const Hero = () => {
  return (
  <div>
  <section className='bg-pink-300 h-[800px] bg-hero bg-no-repeat bg-cover 
  bg-center py-24 '>
  <div className='container mx-auto flex justify-around h-full items-center'>
  <button className='cursor-default'>
  <div className='text-[30px] leading[1.1] font-bold ml-4 text-red-500'>
  <h1 className='text-[50px] leading-[1.1] font-bold ml-4 text-red-600'>Raining Offers 
  For Hot Summer!</h1>
  10% Off On All Products</div>
  <Link to={'/'}>  
  <button className='bg-yellow-500 cursor-pointer text-white font-bold px-5 py-3 text-base
  rounded-full hover:bg-red-600'>Shop Now</button>
  </Link>
  </button>
  <img src={coverImg} alt=''/>
  </div>
  </section><br/><br/>
  <div className='flex justify-center text-[40px] leading-[1.1] font-bold'>Latest Collections</div>
  </div>
  );

}

export default Hero;