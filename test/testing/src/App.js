import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const increment = () => {
    setTimeout(() => {
      setState(state + 1);
    }, 100);
  };
  console.log(state);
  return (
    <div>
      <button onClick={increment}>click me</button>
    </div>
  );
}

export default App;
