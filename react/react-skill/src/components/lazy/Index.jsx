import { useState, lazy, Suspense } from 'react';
// import Head from './Head.jsx';
const Head = lazy(() => import('./Head.jsx'));

export default function Index() {
  const [count, setCount] = useState(false);

  function handle() {
    setCount(!count);
  }
  return (
    <div>
      <button onClick={handle}>点击切换加载</button>
      <Suspense fallback={<div>loading....</div>}>
        {count && <Head></Head>}
        <div>我上方的组件还没有加载</div>
      </Suspense>
    </div>
  );
}
