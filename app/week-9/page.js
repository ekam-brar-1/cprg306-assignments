"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list"; // Make sure to import ItemList
import itemData from "./item.json";
export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [items, setItems] = useState(itemData);
  // Define onselectItem function
  const onselectItem = (item) => {
    setIngredient(item.name.split(" ")[0]);
  };
  console.log(ingredient, "hello");

  return (
    <div>
      <ItemList items={items} onselectItem={onselectItem} />
      <MealIdeas ingredient={ingredient} />
    </div>
  );
}
