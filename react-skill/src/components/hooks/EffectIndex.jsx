import { useEffect, useState, useCallback } from 'react';
console.log('useCallback: ', useCallback);

// export default function App() {
//   const [count, setCount] = useState(1);

//   const d = count * 2; // 计算变量
//   console.log('setCount: ', setCount);
//   // 相当于 componentMount he component 但是 每次数据变化都会执行
//   useEffect(() => {
//     console.log(123); // state 或者props改变都会执行
//   });
//   // 第二个参数为空数组 相当于 componentMount 仅执行一次  不用考虑 <React.StrictMode> 会让执行两次 这是React的机制
//   useEffect(() => {
//     console.log(234);
//   }, []);

//   //  数组中的值改变才会更新
//   useEffect(() => {
//     console.log(345);
//   }, [count]); // Object.is() 判断是否改变 Object.is(1,2)

//   useEffect(() => {
//     console.log(d);
//   }, [d]);

//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <h2>useEffect</h2>
//       <button onClick={handleClick}>点击</button>
//       {count}
//     </>
//   );
// }

// 函数最好在useEffect 中去定义

// export default function App() {
//   const [count, setCount] = useState(1);

//   const fun = useCallback(() => {
//     console.log(count);
//   }, [count]); // 函数作为依赖项  需要使用 useCallback包装一下  返回同一个函数，算是一种性能优化，避免每次都创建函数，虽然每次都创建函数会让useEffect中的函数执行
//   useEffect(() => {
//     fun();
//   }, [fun]);

//   // 尽量在useEffect 中去定义函数
//   useEffect(() => {
//     const fun = function () {
//       console.log(count);
//     };
//     fun();
//   }, [count]);

//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <h2>useEffect</h2>
//       <button onClick={handleClick}>点击</button>
//       {count}
//     </>
//   );
// }

//! effect中的清理公共  返回一个函数
function C() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('执行了');
    return () => {
      // 作用域为当前作用域
      // 再次执行这个useEffect 的时候会先执行返回的回调函数, 卸载的时候也会执行
      console.log('再次执行这个useEffect 的时候会先执行返回的回调函数', count);
    };
  }, [count]);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>点击{count}</button>;
}
export default function App() {
  const [show, setShow] = useState(true);

  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(1);
    return () => {
      // 再次执行这个useEffect 的时候会先执行返回的回调函数, 卸载的时候也会执行
      console.log('再次执行这个useEffect 的时候会先执行返回的回调函数');
    };
  }, [count]);
  function handleClick2() {
    setCount(count + 1);
  }

  function handleClick() {
    setShow(!show);
  }
  return (
    <>
      <h2>useEffect</h2>
      <button onClick={handleClick2}>count {count} </button>
      <button onClick={handleClick}>加载、卸载 </button>
      <br />
      {show && <C></C>}
    </>
  );
}

App.displayName = 'myApp';
