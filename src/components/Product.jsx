import React, {useContext} from 'react'
import { BiCartAdd } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const {products, addToCart} = useContext(ShopContext)
  return (
    <>
    <div className='mt-10'>
      <h1 className='text-center text-4xl font-bold'>Our Collecton</h1>
    </div>
    <div className='grid grid-cols-4 gap-5 p-12'>
      {
       products.map((product) =>{
        const { id, image, title,price} = product;
        return(
          <div key={id} className='relative overflow-hidden border border-gray-300 p-4 text-center transition-shadow hover:shadow-lg'>
            <div>
              <img src={image} alt="" className='w-full h-64 transform scale-90 transition-transform duration-300 hover:scale-100' />
              <div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-3 opacity-0 transition-opacity duration-300 hover:opacity-100'>
              <button className='bg-red-500 text-white p-4 rounded-full transition-colors duration-300 hover:bg-red-600 flex items-center justify-center'>
                <BiCartAdd onClick={()=> addToCart(product, id)} className='text-2xl' />
                </button>
              <button className='bg-red-500 text-white p-4 rounded-full transition-colors duration-300 hover:bg-red-600 flex items-center justify-center'> 
                <FaEye className='text-2xl' />
              </button>
            </div>
            </div>
            <div className='mt-4'>
              <h3 className='text-lg font-bold'>{title}</h3>
              <p className='text-red-500 text-2xl'>${price}</p>
            </div>
            
          </div>
        )
       })
      }
    </div>
    </>
  )
}

export default Product