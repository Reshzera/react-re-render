import React, { useState } from "react";

// Simulates a form item that loses its state
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

// ❌ Keys are generated randomly, which causes React to unmount and remount components
const ListWithRandomKeys: React.FC = () => {
  const [names] = useState(["Alice", "Bob", "Charlie"]);
  // This state is just to trigger re-renders, not necessary for the example
  const [randomState, setRandomState] = useState(0);

  return (
    <div>
      <h2>Anti-Pattern: Random Keys</h2>
      {names.map((name) => (
        <ListItem key={Math.random()} name={name} />
      ))}
      <button onClick={() => setRandomState(randomState + 1)}>
        Click to re-render
      </button>
    </div>
  );
};

export default ListWithRandomKeys;
