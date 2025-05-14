import React, { useState } from "react";

const ComponentsInsideComponentsAntiPattern: React.FC = () => {
  const [count, setCount] = useState(0);

  // ❌ Anti-pattern: Component defined inside another component
  // This is considered an anti-pattern because
  // the inner component is redefined every time the parent renders.
  // It breaks referential identity and prevents
  // memoization optimizations, causing unnecessary re-renders.
  const InsideComponent = () => {
    return <div>Inside Component</div>;
  };

  return (
    <div>
      <h2>
        Anti-Pattern: 
        Components Inside Components Anti-Pattern
      </h2>

      <p>
        This is the component <InsideComponent />
      </p>

      <button onClick={() => setCount(count + 1)}>
        Click to re-render parent ({count})
      </button>
    </div>
  );
};

export default ComponentsInsideComponentsAntiPattern;
