import React from 'react';
import Products from '../Products/Products';
import Login from "../Login/Login";
import Register from '../Register/Register';
import Cart from '../Cart/Cart';
import { Route, Routes } from 'react-router-dom';

const Rout = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}>
        </Route>
        <Route path='/signup' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance} />} />
      </Routes>
    </div>
  )
}

export default Rout;