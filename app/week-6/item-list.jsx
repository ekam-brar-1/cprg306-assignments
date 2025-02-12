"use client";
import Item from "./item.js";
import { useState } from "react";
import shoppingList from "./item.json";
export default function ItemList(props) {
  const [sortby, setSortby] = useState("name");
  const nameSort = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  const quantitySort = (a, b) => {
    return a.quantity - b.quantity;
  };
  const categorySort = (a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  };

  shoppingList.sort((a, b) => {
    if (sortby === "name") {
      return nameSort(a, b);
    } else if (sortby === "quantity") {
      return quantitySort(a, b);
    } else if (sortby === "category") {
      return categorySort(a, b);
    }
  });
  return (
    <div>
      <div className="flex justify-center">
        <button
          className="m-2 border-gray-950 border-2 p-2 hover:bg-gray-200 rounded-lg"
          onClick={() => setSortby("name")}
        >
          Sort by Name
        </button>
        <button
          className="m-2 border-gray-950 border-2 p-2 hover:bg-gray-200 rounded-lg"
          onClick={() => setSortby("quantity")}
        >
          Sort by Quantity
        </button>
        <button
          className="m-2 border-gray-950 border-2 p-2 hover:bg-gray-200 rounded-lg"
          onClick={() => setSortby("category")}
        >
          Sort by Category
        </button>
      </div>
      {shoppingList.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
