import "../index.css";
import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div>
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        item={items}
        onDeleteItem={handleDeleteItem}
        onToglleItems={handleToggleItem}
        setItem={setItems}
      ></PackingList>
      <Stats item={items}></Stats>
    </div>
  );
}
