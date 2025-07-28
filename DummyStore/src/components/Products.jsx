import React, { useContext } from 'react'
import Card from './Card'
import { UserContext } from '../context/Context'
import { Link } from 'react-router-dom'

function Products() {
    const {products}=useContext(UserContext)

  return (
    <div className='flex flex-wrap justify-around my-5'>
        {products.length!==0?products.map((product, index) => {
            return <Link to={`/products/${product.id}`} className='inline-block'> <Card key={index} product={product} /></Link>
        }): <div className='text-red-500 mt-20'>No products found</div>  }
     
    </div>
  )
}

export default Products