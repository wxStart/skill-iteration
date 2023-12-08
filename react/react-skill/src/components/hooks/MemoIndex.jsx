// import { useState, memo,  } from 'react';

// const C = memo(function C() {
//   return <>哈哈是： {Math.random()}</>;
// });

// export default function App() {
//   const [count, setCount] = useState(1);

//   return (
//     <>
//       {count}
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         改变
//       </button>
//       <br />
//       <C count={count}></C>
//     </>
//   );
// }

import { useState, memo, useMemo } from 'react';
console.log('useMemo: ', useMemo);

const C = memo(function C() {
  return <>哈哈是： {Math.random()}</>;
});

export default function App() {
  const [count, setCount] = useState(1);

  const [message, setMessage] = useState('message');
  // const lists = [message.toLocaleUpperCase()]; // 实际上这个值没变因为数组重新被创建了 Object.is 检查到了变化   但是  C 会重新渲染
  const lists = useMemo(() => [message.toLocaleUpperCase()], [message]); // 进行优化 message 没改变返回同一个数组
  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          setMessage(message);
        }}
      >
        改变 {message}
      </button>
      <br />
      <C lists={lists}></C>
    </>
  );
}
