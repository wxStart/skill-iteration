import { useState, useRef } from 'react';

function App() {
  const [count, setCount] = useState(10);
  let num = useRef(0);

  function handleClick() {
    setCount(count + 1);
    num.current++;
    if (num.current == 3) {
      alert('这里是3');
    }
    console.log('num: ', num);
  }

  return (
    <>
      <div onClick={handleClick}>{count}</div>
    </>
  );
}

export default App;
