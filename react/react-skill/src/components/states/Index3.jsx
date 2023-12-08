import { useState } from 'react';

let addInit = function (n) {
  console.log('n: ', n);
  return n + 1 + 2 + 3;
};

//! 惰性初始化

export default function () {
  //   const [count, setCount] = useState(addInit(0)); 每次都会执行
  const [count, setCount] = useState(() => addInit(0)); //! 惰性缓存状态值 进行优化，如果这个函数比较耗时，就可以使用此方法进行优化

  function handleClick() {
    setCount(c => c + 1);
  }
  return (
    <>
      <div onClick={handleClick}>Index2~~~~ 点击增加{count}</div>
    </>
  );
}
