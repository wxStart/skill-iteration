import { useState } from 'react';

//!  setCount 接受一个非函数形式的  多次会合并成最后一次执行

// export default function () {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1); // 相当于 setCount(c => count + 1) 没有使用c
//   }

//   return <div onClick={handleClick}> 点击增加{count}</div>;
// }

//! 参数是 函数的形式  每个函数都会执行的
// export default function () {
//   const [count, setCount] = useState(2);

//   function handleClick() {
//     setCount(c => c + 1);
//     setCount(c => c + 1);
//     setCount(c => c + 2); // 执行完成后就是count +1+1+2 ;相当于每次＋4
//     console.log('count: ', count);
//   }

//   return (
//     <>
//       <div onClick={handleClick}>Index2~~~~ 点击增加{count}</div>
//     </>
//   );
// }

export default function () {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: 'aaa',
    },
  ]);
  function handleClick() {
    lists.push({ id: 2, name: '22' }); // 可以使用use-immer这个库区解决
    setLists(lists); // lists  setLists之前和之后都没有改变
    // setLists([...lists, { id: 3, name: '333' }]);
  }
  return (
    <>
      <div onClick={handleClick}>Index2~~~~ 点击增加</div>
      <ul>
        {lists.map(list => (
          <li key={list.id}>{list.name}</li>
        ))}
      </ul>
    </>
  );
}
