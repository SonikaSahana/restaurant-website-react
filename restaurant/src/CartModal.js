import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './CartModal.css'; 

// Backdrop Component
const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

// ModalOverlay Component
const ModalOverlay = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="content">
        <h2>Your Cart</h2>
        <ul>
          <li>
            <div>
              <h3>Sushi</h3>
              <p>Price: $22.99</p>
              <p>Amount: 1</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Barbecue Burger</h3>
              <p>Price: $12.99</p>
              <p>Amount: 2</p>
            </div>
          </li>
        </ul>
        <div className="actions">
          <button className="button-alt" onClick={onClose}>Close</button>
          <button className="button">Order</button>
        </div>
      </div>
    </div>
  );
};

// Cart Component
const Cart = () => {
  // State to control whether the cart modal is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle cart modal visibility
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Cart Icon - clicking this opens the modal */}
      <button onClick={toggleCart}>🛒 Open Cart</button>

      {/* Cart Modal Logic */}
      {isOpen && (
        <>
          {/* React portal to render the Backdrop and ModalOverlay outside the regular component tree */}
          {ReactDOM.createPortal(<Backdrop onClose={toggleCart} />, document.getElementById('overlays'))}
          {ReactDOM.createPortal(<ModalOverlay onClose={toggleCart} />, document.getElementById('overlays'))}
        </>
      )}
    </div>
  );
};

export default Cart;
