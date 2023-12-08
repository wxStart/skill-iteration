import { useState } from 'react';

// React 内部为每个组件保存了 一个数组，数组的每一项都是一个state对。它维护这当前state对的索引值，在渲染之前将其设置为“0”。每次调用useState时，React都会提供一个state对并增加索引值

// ! 顺序不对的代码
// let a = 0;
// export default function () {
//   const [count, setCount] = useState(12);
//   if (a > 0) {
//     const [count1, setCount1] = useState(1);
//     console.log('setCount1: ', setCount1);
//     console.log('count1: ', count1);
//   }
//   const [count2, setCount2] = useState(2);
//   function handleClick() {
//     a++;
//     setCount(count2 + 1);
//   }
//   console.log('count2, setCount3: ', count2, setCount2);
//   return <div onClick={handleClick}> 点击增加{count}</div>;
// }

//! 多次设置
// export default function () {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//     setCount(count + 3);
//     setCount(count + 1); // 多次设置以最后依次为基准
//     console.log('count: ', count); // 这里还是0
//   }

//   return <div onClick={handleClick}> 点击增加{count}</div>;
// }

//! setTimeout
export default function () {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    setTimeout(() => {
      // 找的是当前的作用域
      console.log(count); // 输出还是0
    }, 3000);
  }

  return <div onClick={handleClick}> 点击增加{count}</div>;
}
