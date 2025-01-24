import React, { useContext } from 'react';
import './Header.css';
import mealsImage from './restaurant.jpg';
import CartContext from './store/CartContext'; 


const Header = ({ onCartClick }) => {
  const cartCtx = useContext(CartContext); 

  const numberOfCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <>
      <header className="header">
        <h1>Foodie's Delight</h1>
        <button className="cart-button" onClick={onCartClick}>
          <span>Your Cart</span>
          <span className="cart-count">{numberOfCartItems}</span> 
        </button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};

export default Header;
