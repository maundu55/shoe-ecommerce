import React, {useContext} from 'react'

const Product = () => {
  const {products} = useContext(ShopContext)
  return (
    <>
    <div>
      <h1>Our Collecton</h1>
    </div>
    <div>
      {
        products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Product