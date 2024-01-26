// counter.ts
import { useState, useCallback } from 'react';


export interface CountModel {
  counter:number,
  increment: ()=>void,
  decrement: ()=>void,
}

export default () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);
  return { counter, increment, decrement };
};