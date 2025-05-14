import React, { useState } from "react";

// ✅ Pattern: Define child components outside the parent component's body
// This preserves referential identity across renders, enabling memoization and avoiding
// unnecessary re-creations of the component function.
const OutsideComponent = () => {
  return <div>Outside Component</div>;
};

const ComponentsInsideComponentsPattern: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>
        Pattern: 
        Components Outside Components Pattern
      </h2>

      <p>
        This is the component <OutsideComponent />
      </p>

      <button onClick={() => setCount(count + 1)}>
        Click to re-render parent ({count})
      </button>
    </div>
  );
};

export default ComponentsInsideComponentsPattern;
