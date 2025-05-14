import React, { useState, type ReactNode } from "react";

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

// ✅ Handles state and side effects, children are untouched
const ScrollContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0); // ❶ state is localized

  return (
    <div
      onScroll={(e) => setScrollPosition(e.currentTarget.scrollTop)}
      style={{ height: "200px", overflowY: "auto" }}
    >
      {" "}
      {/* only this re-renders */}
      {children} {/* children passed as props, not affected by state */}
    </div>
  );
};

const ComponentWithSlowChild: React.FC = () => {
  return (
    <ScrollContainer>
      <h2>Pattern: Wrapping events in a container</h2>
      <VerySlowComponent /> {/* ✅ not re-rendered on scroll */}
    </ScrollContainer>
  );
};

export default ComponentWithSlowChild;
