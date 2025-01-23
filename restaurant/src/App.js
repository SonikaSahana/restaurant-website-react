import React from "react";
import CartModal from './CartModal';
import Header from "./Header";
import Summary from "./Summary";
import MealsList from "./MealsList";

function App() {
  return (
    <div>
      <Header />
      <Summary />
      <MealsList />
      <CartModal />
    </div>
  );
}

export default App;
