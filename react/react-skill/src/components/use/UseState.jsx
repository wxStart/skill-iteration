import { useState } from 'react';
import { flushSync } from 'react-dom';

export default function () {
  const [count, setCount] = useState(10);
  function handleClick() {
    for (let index = 0; index < 100; index++) {
      flushSync(() => {
        // 为啥会渲染两次， 理论上是让渲染10次 即使使用了
        // 即使使用了 Object.is 优化也应该是一次  为啥是2次呢
        setCount(count + 1);
      });
    }
  }

  console.log('render');
  return <div onClick={handleClick}>点击增加:{count}</div>;
}
