"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list"; // Make sure to import ItemList
import itemData from "./item.json";
import NewItem from "./new-item";
export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [items, setItems] = useState(itemData);
  const handleAdditem = (item) => {
    setItems([...items, item]);
  };
  // Define onselectItem function
  const onselectItem = (item) => {
    setIngredient(item.name.split(" ")[0]);
  };
  console.log(ingredient, "hello");

  return (
    <div>
      <NewItem onAddItem={handleAdditem} />
      <ItemList items={items} onselectItem={onselectItem} />
      <MealIdeas ingredient={ingredient} />
    </div>
  );
}
