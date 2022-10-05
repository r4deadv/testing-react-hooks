import { useState } from "react";
import React from "react";

export const useCounter = ({ initialCount = 0, step = 1 } = {}) => {
  const [count, setCount] = useState(initialCount);

  const decrement = () => setCount(count - step);

  const increment = () => setCount(count + step);

  return { count, increment, decrement };
};
