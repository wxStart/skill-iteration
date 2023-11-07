import React, { useCallback, useState, memo } from 'react';
/**
 * let xx = useCallback(calllback,deps)
 * 1. 第一次渲染的时候创建一个函数callback给xx，
 * 2. 仅依赖项重新创建了才会从新创建一个新的callback函数给xx；
 * 3. 解决函数组件中每次更新会创建函数
 * 4. 尽量不要使用useCallback，虽然减少了堆内存的开辟，但是useCallback本身也有逻辑缓存机制，也是需要消耗时间
 * 5. 使用场景： 父组件把一个内部的函数基于属性传递给子组件，此时传递的这个方法，我们基于useCallback处理一下更好，只要这个方法没变就不希望子组件从新渲染(配合PureComponent 或者 memo一起使用)
 */

// let prev, prev2;
// export default function () {
//   const [x, setX] = useState(10);
//   const [y, setY] = useState(10);
//   const handleClick = () => {};
//   const handleClick2 = useCallback(() => {
//     console.log(x);
//   }, [x]);
//   if (prev === undefined) {
//     prev = handleClick;
//   } else {
//     console.log('handleClick是否是原来的函数', prev == handleClick);
//   }

//   if (prev2 === undefined) {
//     prev2 = handleClick2;
//   } else {
//     console.log('handleClick2是否是原来的函数', prev2 == handleClick2);
//   }
//   return (
//     <>
//       <div>x：{x}</div>
//       <div>y：{y}</div>
//       <button
//         onClick={() => {
//           setX(x + 1);
//         }}
//       >
//         +x
//       </button>
//       <button
//         onClick={() => {
//           setY(y + 1);
//         }}
//       >
//         +y 先点击我才能看到 handleClick2是一个新函数
//       </button>
//     </>
//   );
// }

class Child extends React.PureComponent {
  render() {
    console.log('child render');
    return <div>child</div>;
  }
}

const Child2 = memo(function (props) {
  console.log('props: ', props);
  console.log('child2 render');
  return <div>child2</div>;
});

export default function () {
  const [x, setX] = useState(10);
  //
  const handleClick = useCallback(() => {}, []);
  //   const handleClick = () => {};

  return (
    <>
      <div>x：{x}</div>
      <Child handleClick={handleClick} />
      <Child2 handleClick={handleClick} />
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        +x
      </button>
    </>
  );
}
