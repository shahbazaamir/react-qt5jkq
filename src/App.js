import React, { useState, useEffect } from "react";
import "./style.css";
import { fdb } from "./firebaseConf";

export default function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log(fdb.ref("/question"));
    setCount(5);
  });

  return (
    <div>
      <h1>Hello StackBlitzzzzz!</h1>
      {count}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
