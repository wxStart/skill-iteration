import { useEffect } from 'react';
import { useState } from 'react';

let n = 0;
export default function Index() {
  const [data, setData] = useState(['A', 'B', 'C', 'D', 'E', 'F']);
  useEffect(() => {
    setTimeout(() => {
      n = 1;
      setData(['A', 'C', 'E', 'B', 'G', 'F']);
    }, 2000);
  }, []);

  return (
    <div>
      {data.map(el => (
        <div key={el}>{n ? 'new-' + el : el}</div>
      ))}
    </div>
  );
}
