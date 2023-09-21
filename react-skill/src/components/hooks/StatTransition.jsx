// import { useState, startTransition } from 'react';

// function List({ query }) {
//   const itmes = [];
//   const word = 'asdfghjkl';
//   const n = 20000;
//   if (query !== '' && word.includes(query)) {
//     const arr = word.split(query);
//     for (let index = 0; index < n; index++) {
//       itmes.push(
//         <li key={index}>
//           {arr[0]}
//           <span style={{ color: 'red' }}>{query}</span>
//           {arr[1]}
//         </li>,
//       );
//     }
//   } else {
//     for (let index = 0; index < n; index++) {
//       itmes.push(<li key={index}>{word}</li>);
//     }
//   }
//   return <ul>{itmes}</ul>;
// }

// function App() {
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('');
//   const changSearch = e => {
//     // 紧急的  默认就是紧急的
//     setSearch(e.target.value);
//     // 非紧急任务
//     startTransition(() => {
//       setQuery(e.target.value);
//     });
//   };

//   return (
//     <>
//       <h2>statTransition</h2>
//       <input type="text" value={search} onChange={changSearch} />
//       <List query={query}></List>
//     </>
//   );
// }

// import { useState, useTransition } from 'react';

// function List({ query }) {
//   const itmes = [];
//   const word = 'asdfghjkl';
//   const n = 20000;
//   if (query !== '' && word.includes(query)) {
//     const arr = word.split(query);
//     for (let index = 0; index < n; index++) {
//       itmes.push(
//         <li key={index}>
//           {arr[0]}
//           <span style={{ color: 'red' }}>{query}</span>
//           {arr[1]}
//         </li>,
//       );
//     }
//   } else {
//     for (let index = 0; index < n; index++) {
//       itmes.push(<li key={index}>{word}</li>);
//     }
//   }
//   return <ul>{itmes}</ul>;
// }

// function App() {
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('');
//   const [pending, startTransition] = useTransition();
//   const changSearch = e => {
//     // 紧急的  默认就是紧急的
//     setSearch(e.target.value);
//     // 非紧急任务
//     startTransition(() => {
//       setQuery(e.target.value);
//     });
//   };

//   return (
//     <>
//       <h2>statTransition</h2>
//       <input type="text" value={search} onChange={changSearch} />
//       {pending && 'startTransition->setQuery loging...'}
//       <List query={query}></List>
//     </>
//   );
// }

import { useState, useDeferredValue } from 'react';

function List({ query }) {
  const itmes = [];
  const word = 'asdfghjkl';
  const n = 20000;
  if (query !== '' && word.includes(query)) {
    const arr = word.split(query);
    for (let index = 0; index < n; index++) {
      itmes.push(
        <li key={index}>
          {arr[0]}
          <span style={{ color: 'red' }}>{query}</span>
          {arr[1]}
        </li>,
      );
    }
  } else {
    for (let index = 0; index < n; index++) {
      itmes.push(<li key={index}>{word}</li>);
    }
  }
  return <ul>{itmes}</ul>;
}

function App() {
  const [search, setSearch] = useState('');
  const query = useDeferredValue(search);
  const changSearch = e => {
    // 紧急的  默认就是紧急的
    setSearch(e.target.value);
  };

  return (
    <>
      <h2>statTransition</h2>
      <input type="text" value={search} onChange={changSearch} />
      <List query={query}></List>
    </>
  );
}
export default App;
