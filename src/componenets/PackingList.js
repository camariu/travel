import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  setItem,
  onDeleteItem,
  onToglleItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  function handleDeleteItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItem([]);
  }

  let sortedItems;

  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToglleItems={onToglleItems}
          ></Item>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by paked status</option>
        </select>
        <button onClick={handleDeleteItems}>Clear list</button>
      </div>
    </div>
  );
}
