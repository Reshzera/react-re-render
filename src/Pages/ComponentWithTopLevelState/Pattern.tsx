import React, { useState } from "react";

// Simulates a heavy rendering component
const VerySlowComponent = () => {
  return <div>🧠 Very Slow Component</div>;
};

const ModalDialog = () => {
  return <div>💬 Modal Dialog</div>;
};

// Pattern: State is moved into a separate component to isolate re-renders
const ButtonWithDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // localized state

  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close Dialog" : "Open Dialog"}
      </button>
      {/* only this re-renders */}
      {isOpen && <ModalDialog />}
    </>
  );
};

const ComponentWithIsolatedDialog: React.FC = () => {
  return (
    <div>
      <h2>Pattern: Isolated Dialog State</h2>
      <ButtonWithDialog /> {/* ✅ re-renders only when needed */}
      <VerySlowComponent /> {/* ✅ not affected by dialog state */}
    </div>
  );
};

export default ComponentWithIsolatedDialog;
