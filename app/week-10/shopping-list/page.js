"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list"; // Make sure to import ItemList
import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
export default function App() {
  const { user } = useUserAuth();
  const [ingredient, setIngredient] = useState("");
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    if (user && user.uid) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  };
  useEffect(() => {
    loadItems();
  }, [items]);
  // Define onselectItem function

  const onselectItem = (item) => {
    setIngredient(item.name.split(" ")[0]);
  };
  console.log(ingredient, "hello");
  const handleAddItem = async (newItem) => {
    if (user && user.uid) {
      const addedItem = await addItem(user.uid, newItem);
      if (addedItem && addedItem.id) {
        setItems((prevItems) => [
          ...prevItems,
          { ...newItem, id: addedItem.id },
        ]);
      }
    }
  };
  return (
    <div>
      {user ? (
        <div>
          <NewItem handleAddItem={handleAddItem} />
          <ItemList items={items} onselectItem={onselectItem} />
          <MealIdeas ingredient={ingredient} />
        </div>
      ) : (
        <div> Please sign in to view the content</div>
      )}
    </div>
  );
}
