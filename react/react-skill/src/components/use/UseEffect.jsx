import { useState, useEffect } from 'react';

/***
 * useEffect: 在函数组件的中使用生命周期
 * useEffect(callback)
 *   1. 第一次渲染完毕后执行 callback 等价于componentDidMount
 *   2. 在组件每次更新完毕后也执行 callback 等价于 componentDidUpdate
 * useEffect(callback,[])
 *   1. 只有第一次渲染完毕后执行 callback 等价于componentDidMount
 *   2.后续更新不在执行
 * useEffect(callback,[count])
 *   1. 只有第一次渲染完毕后执行 callback
 *   2. 当依赖的count变化了  callback才会执行
 *   3. 依赖项没有变化  callback是不会执行的
 *
 * useEffect 中的 callback中返回一个函数，
 *  1. 这个函数会在组件重新渲染后，立即最先执行 ，然后执行effect
 *  2. 类似componentWillUnmount
 */

export default function () {
  const [count, setCount] = useState(10);
  const [x, setX] = useState(10);
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickX() {
    setX(count + 1);
  }
  useEffect(() => {
    console.log('初始化和更新的时候都执行: @1---', count);
  });
  useEffect(() => {
    console.log('只在初始化时候，执行一次:  @2---', count);
  }, []);

  useEffect(() => {
    console.log('只在初始化时候和x变化时候，执行  @3---', count, 'x', x);
  }, [x]);

  useEffect(() => {
    // console.log('我这里返回了一个函数', count); // 最新的count
    return () => {
      //
      console.log('下次更新的时候才会执行返回的函数@4---', count); //上次的count
    };
  });

  console.log('render');
  return (
    <>
      <div onClick={handleClick}>点击增加count:{count}</div>
      <div onClick={handleClickX}>点击增加x:{x}</div>
    </>
  );
}
