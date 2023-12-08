/**
 * 优化的
 * let xx =  useMemo(callback,[dependencies])
 * 1. 第一次组件执行时候，会执行callback 并且返回callback的返回值
 * 2. 只有依赖的状态值发生改变，callback 才会再次执行
 * 类似vue中的计算属性
 */

import { useMemo, useState } from 'react';

export default function () {
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [z, setZ] = useState(10);
  const sum = useMemo(() => {
    console.log('sum 的函数执行了');
    return x + y;
  }, [x, y]);

  return (
    <>
      <div>x:{x}</div> <div>y:{y}</div>
      <div>sum(x+y):{sum}</div>
      <div>z:{z}</div>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        +x
      </button>
      <button
        onClick={() => {
          setY(y + 1);
        }}
      >
        +y
      </button>
      <button
        onClick={() => {
          setZ(z + 1);
        }}
      >
        +z
      </button>
    </>
  );
}
