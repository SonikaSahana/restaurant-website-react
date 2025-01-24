import React, { useContext } from "react";
import CartContext from "./store/CartContext"; 
import "./MealsItemForm.css";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    console.log("Adding item to cart:", { id, name, price, amount: 1 });
    cartCtx.addItem({
      id,
      name,
      price,
      amount: 1,
    });
  };

  return (
    <li className="meal-item">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
      </div>
      <button onClick={addToCartHandler}>+ Add</button> 
    </li>
  );
};

export default MealItem;
