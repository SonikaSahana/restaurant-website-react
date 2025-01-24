import { CartProvider } from "./store/CartContext"; // Ensure the correct path
import Header from "./Header";
import Summary from "./Summary";
import MealsList from "./MealsList";
import CartModal from "./CartModal";
import React, { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Header onCartClick={toggleCart} />
      <Summary />
      <MealsList />
      {isCartOpen && <CartModal onClose={toggleCart} />}
    </CartProvider>
  );
}

export default App;
