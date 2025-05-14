import React, { useState } from "react";

// Simulates a form item that maintains its state
const ListItem = ({ name }: { name: string }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <strong>{name}</strong>:{" "}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

// ✅ Keys are based on stable values (e.g., IDs or unique strings)
const ListWithStableKeys: React.FC = () => {
  const [items] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
  // This state is just to trigger re-renders, not necessary for the example
  const [randomState, setRandomState] = useState(0);

  return (
    <div>
      <h2>Pattern: Stable Keys</h2>
      {items.map((item) => (
        <ListItem key={item.id} name={item.name} />
      ))}
      <button onClick={() => setRandomState(randomState + 1)}>
        Click to re-render
      </button>
    </div>
  );
};

export default ListWithStableKeys;
