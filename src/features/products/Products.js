import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsync } from './productsSlice'
import {addAsync} from '../cart/cartSlice'
import './Products.css'

export function Products () {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)
  useEffect(() => {
    dispatch(fetchAsync())
  }, [])
  return (
    <div className='row'>
      {products.map((product, index) => (
        <div key={index} className='card col-md-5'>
          <img src={product.thumbnail} alt={product.title}  style={{ height: '200px', width: '100%' }} />
          <h1>{product.title}</h1>
          <p className='price'>${product.price}</p>
          <p>{product.description}</p>
          <p>
            <button onClick={()=>dispatch(addAsync(product))}>Add to Cart</button>
          </p>
        </div>
      ))}
    </div>
  )
}
