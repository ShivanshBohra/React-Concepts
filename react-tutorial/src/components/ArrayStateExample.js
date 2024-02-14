import React, { useState } from "react";

function ArrayStateExample() {
  const [items, setItems] = useState([]);
  function addItems() {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length,
        value: Math.random(),
      },
    ]);
  }
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>
      <button onClick={addItems}>Add items</button>
    </div>
  );
}

export default ArrayStateExample;
