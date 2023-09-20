import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
console.log('useState: ', useState);

//! ref 记忆功能
// function App() {
//   const [count, setCount] = useState(10);
//   const num = useRef(0); // 数据记忆功能

//   const timer = useRef(null); // 数据记忆功能

//   function handleClick() {
//     setCount(count + 1);
//     num.current++;
//     if (num.current == 3) {
//       alert('这里是3');
//     }
//     console.log('num: ', num);

//     if (timer.current) {
//       clearInterval(timer.current);
//     }
//     timer.current = setInterval(() => {
//       console.log(1);
//     }, 1000);
//   }

//   return (
//     <>
//       <div onClick={handleClick}>{count}</div>
//     </>
//   );
// }

//! 操作dom
// function App() {
//   const domRef = useRef(null);

//   function handleClick() {
//     console.log('domRef: ', domRef);
//     domRef.current.style.color = 'red';
//     console.log('innerHTML: ', domRef.current.innerHTML);
//   }

//   return (
//     <>
//       <div ref={domRef}>我是dom的内容</div>
//       <button onClick={handleClick}>点击获取dom</button>
//     </>
//   );
// }

//! dom 上的ref 是一个函数的形式
function App() {
  const domRef = useRef([]); // 这里可以拿到多个

  const lists = [
    {
      id: 1,
      name: 'aaa',
    },
    {
      id: 2,
      name: '222',
    },
  ];

  function handleClick() {
    console.log('innerHTML: ', domRef.current);
  }

  return (
    <>
      <ul onClick={handleClick}>
        {/* {lists.map(list => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const myRef = useRef(null);
          return (
            <li key={list.id} ref={myRef}>
              {list.name}
            </li>
          );
        })} */}
        {lists.map((list, index) => {
          return (
            <li
              key={list.id}
              ref={myRef => {
                // 这里的函数会执行
                console.log('渲染时候就执行了');
                domRef.current[index] = myRef;
              }}
            >
              {list.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

//! ref 转发    forwardRef  让你的组件向父组件公开Dom节点
const MyInput1 = forwardRef(function (props, ref) {
  return (
    <>
      MyInput1:
      <input ref={ref} type="text" />
    </>
  );
});

//!自定义暴露ref的结构 给父组件使用
const MyInput2 = forwardRef(function (props, ref) {
  const [count, setCount] = useState(1);
  const inputRef = useRef(null);

  // 自定义暴露ref的结构 给父组件使用
  useImperativeHandle(ref, () => {
    return {
      myFocus() {
        console.log('MyInput2, 自定义的暴露');
        inputRef.current.focus();
      },
      changeCount(num) {
        setCount(count + num);
      },
    };
  });
  return (
    <>
      MyInput2:
      <input ref={inputRef} type="text" />
      <div>count:{count}</div>
    </>
  );
});

function App2() {
  const ref = useRef(null);
  function handleClick() {
    console.log('获取子组件中的dom: ', ref);
    ref.current.focus();
    ref.current.value = '123';
  }

  const ref2 = useRef(null);
  function handleClick2() {
    console.log('获取子组件中的ref2: ', ref2);
    ref2.current.myFocus();
    ref2.current.changeCount(10);
  }
  return (
    <div>
      <h2>ref 转发 forwardRef 让你的组件向父组件公开Dom节点</h2>

      <button onClick={handleClick}>点击让自定义组件中的MyInput1得到焦点</button>
      <br></br>
      <MyInput1 ref={ref}></MyInput1>
      <br></br>
      <button onClick={handleClick2}>点击让自定义组件中的MyInput2中的焦点函数执行 以及改变count的值</button>
      <br></br>
      <MyInput2 ref={ref2}></MyInput2>
    </div>
  );
}

export { App };
export default App2;
