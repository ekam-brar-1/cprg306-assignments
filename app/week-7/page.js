"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import { useState } from "react";
import itemData from "./item.json";
export default function Page() {
  const [items, setItems] = useState(itemData);
  const handleAdditem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div>
      <NewItem handleAdditem={handleAdditem} />
      <ItemList items={items} />
    </div>
  );
}
