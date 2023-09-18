import style from './index.module.css';
import ScssStyle from './index.module.scss';

export default function Index() {
  return (
    <>
      <div className={style.head}>head</div>
      <div className={style.headTitle}>headTitle</div>
      <div className={ScssStyle.head}>head scss</div>
      <div className={ScssStyle.headTitle}>headTitle scss</div>
    </>
  );
}
