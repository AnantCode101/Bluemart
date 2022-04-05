import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
      <div>
        <h1>
          <Link to="/" className="logo">
            BlueMart
          </Link>
        </h1>
      </div>
      <div className='header-links'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">Login</Link>
          </li>
        </ul>
        <Link to="/register"></Link>
        <ul>
          <li>
            <Link to="/cart" className='cart'>
              {/* <i class="far fa-shopping-cart"></i> */}
              {/* <span className='cart-length'>
              {cartItems.length === 0 ? "" : cartItems.length}
            </span> */}
              Cart
            </Link>
          </li>
        </ul>

      </div>
    </header>
  )
};

export default Header;