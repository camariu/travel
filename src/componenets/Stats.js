import React from "react";

export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding items to your paking list🚀</em>
      </p>
    );
  const numItems = item.length;
  const numPaked = item.filter((item) => item.packed).length;
  const precentage = Math.round((numPaked / numItems) * 100);
  console.log(numItems);

  return (
    <footer className="stats">
      <em>
        {precentage < 100
          ? `💼You have ${numItems} items on your list, and you allerdy paked ${numPaked}
      (${precentage}%)`
          : "You got evrything! ready to go ✈"}
      </em>
    </footer>
  );
}
