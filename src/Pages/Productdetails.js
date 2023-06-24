import React, { useContext} from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from 'file:///E:/Projects/shopping-website/src/Contexts/CartContext.js';
import { Productcontext } from '../Contexts/Productcontext';

const Productdetails = () => {
  const { id } = useParams();
  const { products } = useContext(Productcontext);
  const { addToCart } = useContext(CartContext);

  const product = products.find(item => {
    return item.id === parseInt(id);
  });
  if(!product){
    return (
    <section className='h-screen flex  justify-center items-center'>Loading.....</section>
    );
  }
  const { title, price, description, image} = product;
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'> 
          <img className='max-w-[50px] lg:max-w-sm' src={image} alt='' />
        </div>
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 lg:mx-0 mx-auto'>{title}</h1>
        <div className='text-xl text-red-600 font-medium mb-6 mx-auto'>$ {price} </div>
        <p className='mb-8 font-medium'>{description}</p>
        <button 
        onClick={() => addToCart(product, product.id)}
        className='bg-yellow-500 cursor-pointer text-white font-bold px-5 py-3 text-base
        rounded-full hover:bg-red-600 '>Add to Cart</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Productdetails;