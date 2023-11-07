import { useState, useEffect, useLayoutEffect } from 'react';

/**
 * useLayoutEffect
 *
 * 1. 和useEffect的使用方式是一样的
 * 2. 他的执行机制是在浏览器渲染之前，此时dom已经生成了
 * 3. 可以在这里获取到最新的真是dom节点
 * 4. 主要解决一些闪烁的问题(我感觉是频繁切换导致的)
 * 5. useLayoutEffect中的回调 优先于 useEffect的回调执行
 * 6. useLayoutEffect中的状态变化会把前一次的浏览器渲染合并为一次，也就是说只会渲染一次
 */

export default function () {
  const [count, setCount] = useState(10);
  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('useEffect', document.getElementById('count').innerHTML);
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect', document.getElementById('count').innerHTML);
  });

  return (
    <>
      <div id="count" onClick={handleClick}>
        点击增加count:{count}
      </div>
    </>
  );
}
