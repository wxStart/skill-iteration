import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function Index() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  function handle() {
    flushSync(() => {
      setCount(count + 1);
    });
    console.log('count: ', count); // 这里是旧值
    console.log(' ref.current.innerHTML: ', ref.current.innerHTML); // 这里是最新的dom
  }
  return (
    <div ref={ref} onClick={handle}>
      {count}
    </div>
  );
}
