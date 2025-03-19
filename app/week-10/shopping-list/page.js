"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list"; // Make sure to import ItemList
import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [items, setItems] = useState([]);
  const loadItems = async () => {
    const items = await getItems();
    setItems(items);
  };
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
