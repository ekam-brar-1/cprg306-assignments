"use client";

import { useState } from "react";

export default function NewItem({ handleAdditem }) {
  const [quantity, setquantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      name: name,
      category: category,
      quantity: quantity,
    };
    handleAdditem(item);
    setCategory("Produce");
    setName("");
    setquantity(1);
    // console.log(name,category,quantity);
    return;
  };

  const increment = () => {
    if (quantity >= 20) {
      return;
    }
    setquantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= 0) {
      return;
    }
    setquantity(quantity - 1);
  };

  return (
    <div className="border-2 border-gray-900 my-2 p-2 rounded-lg flex flex-col items-center">
      <form className="flex">
        <label id="name">
          Name:
          <input
            className="m-2 border-2 p-2 hover:bg-gray-200 border-gray-900 rounded-lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label for="quantity">
          Quantity: {quantity}
          <button
            type="button"
            className={`m-2 border-2 p-2 hover:bg-blue-400 border-gray-900 rounded-lg ${
              quantity >= 20 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={increment}
          >
            Increase
          </button>
          <button
            type="button"
            className={`m-2 border-2 p-2 hover:bg-blue-400 border-gray-900 rounded-lg  ${
              quantity == 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={decrement}
          >
            Decrease
          </button>
        </label>
        <label for="category">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="m-2 border-2 p-2 hover:bg-gray-200 border-gray-900 rounded-lg"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button
          className="m-2 border-2 p-2 hover:bg-blue-400 border-gray-900 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
