import React from "react";
import "./MealsItemForm.css";

const MealItemForm = () => {
  return (
    <form className="meal-form">
      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button type="button">+ Add</button>
    </form>
  );
};

export default MealItemForm;
