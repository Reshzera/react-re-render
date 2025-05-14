import React, { useState } from "react";

// Simulates a very expensive render
const VerySlowComponent = () => {
  return (
    <div
      style={{
        minHeight: "250px",
      }}
    >
      🧠 Very Slow Component
    </div>
  );
};

// ❌ State and event handler are in the same component as the heavy child
const ComponentWithScrollAndHeavyChild: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0); // ❶ state update triggers full re-render

  return (
    <div
      onScroll={(e) => setScrollPosition(e.currentTarget.scrollTop)}
      style={{ height: "200px", overflowY: "auto" }}
    >
      {" "}
      {/* ❷ re-renders all */}
      <h2>Anti-Pattern: State and Event Handler in the Same Component</h2>
      <VerySlowComponent /> {/* ❸ gets re-rendered unnecessarily */}
    </div>
  );
};

export default ComponentWithScrollAndHeavyChild;
