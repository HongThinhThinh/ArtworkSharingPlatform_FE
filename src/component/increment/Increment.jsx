import React, { useEffect, useState } from "react";
import "./Increment.scss";

function Increment({ data }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number <= data - 1) {
      const id = setInterval(() => {
        setNumber(number + 1);
      }, 10);
      return () => {
        clearInterval(id);
      };
    }
  });
  return (
    <div className="increment">
      <h1>{number}</h1>
      <p>Amount Of Users</p>
    </div>
  );
}

export default Increment;
