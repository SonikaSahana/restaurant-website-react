import React from 'react';
import ReactDOM from 'react-dom';
import './CartModal.css';

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = () => {
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
          <button className="button-alt">Close</button>
          <button className="button">Order</button>
        </div>
      </div>
    </div>
  );
};

const CartModal = () => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlays'))}
    </>
  );
};

export default CartModal;
