"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list"; // Make sure to import ItemList
import itemData from "./item.json";
import { useUserAuth } from "../_utils/auth-context";
export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [items, setItems] = useState(itemData);
  // Define onselectItem function
  const { user } = useUserAuth();
  const onselectItem = (item) => {
    setIngredient(item.name.split(" ")[0]);
  };
  console.log(ingredient, "hello");

  return (
    <div>
      {user ? (
        <div>
          <ItemList items={items} onselectItem={onselectItem} />
          <MealIdeas ingredient={ingredient} />
        </div>
      ) : (
        <div> Please sign in to view the content</div>
      )}
    </div>
  );
}
