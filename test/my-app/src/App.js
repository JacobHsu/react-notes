import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  console.log("App " + state);
  return (
    <div>
      <button
        onClick={() => {
          setState((count) => count + 1);
          setState((count) => count * 2);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default App;
