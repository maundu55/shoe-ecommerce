import React, {useContext} from 'react'
import { BiCartAdd } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const {products} = useContext(ShopContext)
  return (
    <>
    <div>
      <h1>Our Collecton</h1>
    </div>
    <div>
      {
       products.map((product) =>{
        const { id, image, title,price} = product;
        return(
          <div key={id}>
            <div>
              <img src={image} alt="" />
              <div>
              <button><BiCartAdd /> </button>
              <button> <FaEye /> </button>
            </div>
            </div>
            <div>
              <h3>{title}</h3>
              <p>${price}</p>
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