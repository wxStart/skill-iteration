import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>下面的的元素渲染在document.body下面</h2>
      {createPortal(
        <p
          onClick={() => {
            setCount(count + 1);
          }}
        >
          我被传送到其他为止了: {count}
        </p>,
        document.querySelector('body'),
      )}
    </div>
  );
}
