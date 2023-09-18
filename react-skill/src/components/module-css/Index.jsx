import style from './index.module.css';
import ScssStyle from './index.module.scss';
import classNames from 'classnames';

export default function Index() {
  return (
    <>
      <div className={style.head}>head</div>
      <div className={style.headTitle}>headTitle</div>
      <div className={ScssStyle.head}>head scss</div>
      <div className={ScssStyle.headTitle}>headTitle scss</div>
      <div
        className={classNames({
          [style.head]: true,
          [ScssStyle.head]: true,
        })}
      >
        组合 classNames
      </div>
    </>
  );
}
