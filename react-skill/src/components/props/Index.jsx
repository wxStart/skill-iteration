import PropsTypes from 'prop-types';
function Base(props) {
  const { id, msg, onClick } = props;
  return (
    <div onClick={onClick}>
      id:{id},msg:{msg}
      <div>{props.children}</div>
    </div>
  );
}

// 默认值
Base.defaultProps = {
  id: '默认ID',
  msg: '默认msg',
};

// 类型
function TypeBase(props) {
  const { id, msg } = props;
  return (
    <div>
      TypeBase id:{id},msg:{msg}
    </div>
  );
}
TypeBase.defaultProps = {
  id: 123,
  msg: '默认msg',
};

TypeBase.propTypes = {
  id: PropsTypes.number,
  msg: PropsTypes.string,
};

const Props = {
  Base,
  TypeBase,
  Child(props) {
    return <div>Child 内容 count: {props.count}</div>;
  },
};

export default function () {
  const base = {
    id: 1,
    msg: 12,
    name1: 23,
  };
  let count = 123;
  return (
    <>
      <Props.Base
        onClick={() => {
          console.log(123);
        }}
      >
        123
      </Props.Base>

      <Props.Base
        {...base}
        onClick={() => {
          console.log(123);
        }}
      >
        <Props.Child count={count}></Props.Child>
      </Props.Base>
      <Props.TypeBase id={'123'}></Props.TypeBase>
    </>
  );
}
