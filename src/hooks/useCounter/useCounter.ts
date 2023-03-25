import { useEffect, useState } from "react";

export const useCounter = (initialCount: number = 0) => {
  const [count, setCount] = useState<number>(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  useEffect(() => {
    return () => {
      setCount(initialCount);
    };
  }, []);
  return { count, increment, decrement };
};
