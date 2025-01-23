import React, { useState } from "react";
import CartModal from './CartModal';
import Header from "./Header";
import Summary from "./Summary";
import MealsList from "./MealsList";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);  
  };

  return (
    <div>
     
      <Header onCartClick={toggleCart} />
      <Summary />
      <MealsList />

     
      {isCartOpen && <CartModal onClose={toggleCart} />}
    </div>
  );
}

export default App;
