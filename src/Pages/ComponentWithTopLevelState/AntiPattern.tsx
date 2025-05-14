import React, { useState } from "react";

// Simulates a heavy rendering component
const VerySlowComponent = () => {
  return <div>🧠 Very Slow Component</div>;
};

// Simulates a modal dialog
const ModalDialog = () => {
  return <div>💬 Modal Dialog</div>;
};

// Anti-pattern: State is managed at the top level, causing all children to re-render
const ComponentWithTopLevelState: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // causes full re-render on change

  return (
    <div>
      <h2>Anti-Pattern: Top-Level State</h2>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close Dialog" : "Open Dialog"}
      </button>
      {/* triggers full re-render */}
      {isOpen && <ModalDialog />} {/* also causes re-render */}
      <VerySlowComponent /> {/* re-renders unnecessarily */}
    </div>
  );
};

export default ComponentWithTopLevelState;
