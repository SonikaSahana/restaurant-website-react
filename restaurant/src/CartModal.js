import React from 'react';
import ReactDOM from 'react-dom';
import './CartModal.css';

// Backdrop Component
const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;  // Clicking backdrop closes modal
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

// CartModal Component
const CartModal = ({ onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay onClose={onClose} />, document.getElementById('overlays'))}
    </>
  );
};

export default CartModal;
