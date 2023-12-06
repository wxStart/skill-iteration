import { createSearchParams, useLocation, useSearchParams } from 'umi';
import style from './xm.scss';
console.log('style: ', style);

export default function Xm() {
  const location = useLocation();
  console.log('location: ', location);

  const [sup1] = useSearchParams();
  console.log('sup1.a', sup1.get('a'));

  const state = location.state;
  const sup = createSearchParams(location.search);
  let a = sup.get('a');
  return (
    <div className={style.root}>
      小明的个人介绍
      <div className={style.info}>age:{30}</div>
      {state ? <div>小杨给小明的state参数{JSON.stringify(state)}</div> : null}
      {a ? <div>小杨给小明的search参数 a = {a}</div> : null}
    </div>
  );
}
