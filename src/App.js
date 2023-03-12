import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import { CartReducer } from './reducer/cart';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {

  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: []
  })

  async function fetchdata() {
    const { data } = await axios.get('https://dummyjson.com/products')
    dispatch({
      type: 'add_products',
      payload: data.products
    })
  }

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div style={{display:'flex'}}>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App;
