import React from "react";
import MealItemForm from "./MealsItemForm";
import "./MealsList.css";

const DUMMY_MEALS = [
  { id: "m1", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
  { id: "m2", name: "Schnitzel", description: "A German specialty!", price: 16.5 },
  { id: "m3", name: "Barbecue Burger", description: "American, raw, meaty", price: 12.99 },
  { id: "m4", name: "Green Bowl", description: "Healthy... and green...", price: 18.99 },
];

const MealsList = () => {
  return (
    <section className="meals">
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id} className="meal-item">
            <div>
              <h3>{meal.name}</h3>
              <p className="description">{meal.description}</p>
              <p className="price">${meal.price.toFixed(2)}</p>
            </div>
            <MealItemForm />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MealsList;
