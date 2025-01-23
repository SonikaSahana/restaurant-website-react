import React from 'react';
import './Header.css';
import mealsImage from './restaurant.jpg'; 

const Header = ({ onCartClick }) => {  // Receive `onCartClick` as prop
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <button className="cart-button" onClick={onCartClick}>  {/* Trigger onCartClick to open modal */}
          <span>Your Cart</span>
          <span className="cart-count">0</span>
        </button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};

export default Header;
