import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "./store/CartContext";
import "./CartModal.css";

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

const ModalOverlay = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const formattedTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div className="modal">
      <div className="content">
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Amount: {item.amount}</p>
              </div>
              <button
                onClick={() => removeItemHandler(item.id)}
                className="remove-button"
              >
                -
              </button>
            </li>
          ))}
        </ul>
        <div className="total-amount">
          <h3>Total Amount: {formattedTotalAmount}</h3>
        </div>
        <div className="actions">
          <button className="button-alt" onClick={onClose}>
            Close
          </button>
          {cartCtx.items.length > 0 && (
            <button className="button">Order</button>
          )}
        </div>
      </div>
    </div>
  );
};


const CartModal = ({ onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose} />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default CartModal;
