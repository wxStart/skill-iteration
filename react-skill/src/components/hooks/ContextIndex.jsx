// import { useState, createContext, useContext } from 'react';

// const MyContext = createContext();
// export { MyContext };

// function C() {
//   const context = useContext(MyContext);
//   console.log('context: ', context);
//   return (
//     <>
//       <div>C组件中 的count:{context.count}</div>
//       <button onClick={context.changCount}>C change count</button>
//     </>
//   );
// }

// function P() {
//   return (
//     <div>
//       <C></C>
//     </div>
//   );
// }

// export default function App() {
//   const [count, setCount] = useState(1);

//   function handleClick2() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h2>Context</h2>
//       <button onClick={handleClick2}>count {count} </button>
//       <br />
//       <MyContext.Provider value={{ count: count, changCount: handleClick2 }}>
//         <P></P>
//       </MyContext.Provider>
//     </>
//   );
// }

//! reducer 和 context 结合示例  组件之间共享
import { createContext, useContext, useReducer } from 'react';

const ListContext = createContext();
const ListDispatchContext = createContext();

function listReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: Date.now() }];
    case 'edit':
      return state.map(el => {
        return el.id == action.id ? { ...el, text: 'new_' + el.text } : el;
      });
    case 'delete':
      return state.filter(el => {
        return el.id == action.id ? false : true;
      });
  }
}
function ListProvider({ children }) {
  const [lists, listDispatch] = useReducer(listReducer, [{ id: 123, text: 121234 }]);
  return (
    <ListContext.Provider value={lists}>
      <ListDispatchContext.Provider value={listDispatch}>{children}</ListDispatchContext.Provider>
    </ListContext.Provider>
  );
}

export { ListContext, ListDispatchContext };

function HeadCom() {
  const listDispatch = useContext(ListDispatchContext);
  return (
    <>
      <button onClick={() => listDispatch({ type: 'add' })}>新增 </button>
    </>
  );
}

function ListCom() {
  const lists = useContext(ListContext);
  console.log('lists: ', lists);
  const listDispatch = useContext(ListDispatchContext);
  return (
    <ul>
      {lists.map(el => (
        <li key={el.id}>
          {el.text}
          <button onClick={() => listDispatch({ type: 'edit', id: el.id })}>编辑</button>
          <button onClick={() => listDispatch({ type: 'delete', id: el.id })}> 删除</button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <>
      <ListProvider>
        <h2>Context 和 Reducer</h2>
        <HeadCom></HeadCom>
        <br />
        <ListCom></ListCom>
      </ListProvider>
    </>
  );
}

App.displayName = 'myApp';
