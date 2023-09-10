import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsync,deleteAsync,updateAsync } from './cartSlice'
import './cart.css'

export function Cart () {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

const handleSelect=(e,id)=>{

  dispatch(updateAsync({id,change:{quantity:+e.target.value}}))
}

  return (
    <div className='cart'>
      {items.map((item, index) => (
        <div className='cart-item' key={index}>
          <img src={item.thumbnail} alt={item.title} />
          <div className='description'>
            <span>{item.brand}</span>
            <p>{item.title}</p>
            <strong>${item.price}</strong>
          </div>
          <div className='quantity'>
            quantity
            <select value={item.quantity} onChange={(e)=>handleSelect(e,item.id)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className='close'>
            <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
          </div>
        </div>
      ))}
      <h1>Total Price:{items.reduce((acc,item)=>item.price*item.quantity+acc,0)}</h1>
    </div>
  )
}
