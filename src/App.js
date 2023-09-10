import React, { useState, useEffect } from 'react'
import { Products } from './features/products/Products'
import { useSelector, useDispatch } from 'react-redux'
import { Cart } from './features/cart/Cart'
import { fetchAsync } from './features/cart/cartSlice'
import './App.css'

function App() {
  const [showCart, setShowCart] = useState(false)
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsync())
  }, [])
  return (
    <div className='App'>

      <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
        <i className="fas fa-shopping-cart" style={{ fontSize: "80px" }}></i>
        <sup className="cart-count">{items.length}</sup>
      </div>
      <div >
        {showCart ? <Cart /> : <Products />}
      </div>
    </div>
  )
}

export default App
