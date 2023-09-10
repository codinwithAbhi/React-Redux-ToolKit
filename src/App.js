import React, { useState,useEffect } from 'react'
import { Products } from './features/products/Products'
import { useSelector, useDispatch } from 'react-redux'
import { Cart } from './features/cart/Cart'
import { fetchAsync } from './features/cart/cartSlice'
import './App.css'

function App () {
  const [showCart, setShowCart] = useState(false)
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsync())
  }, [])
  return (
    <div className='App'>
      <button onClick={() => setShowCart(!showCart)}>
        Show Cart[{items.length}]
      </button>
      {showCart ? <Cart /> : <Products />}
    </div>
  )
}

export default App
