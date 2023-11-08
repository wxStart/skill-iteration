function withZ(Com) {
  return props => {
    return <Com {...props} z="我是高阶组件提供的z"></Com>;
  };
}

function Child(props) {
  console.log('props: ', props);
  return (
    <>
      <div>x:{props.x}</div>
      <div>z:{props.z}</div>
    </>
  );
}

const WithZChild = withZ(Child);

export default function HocIndex() {
  return (
    <>
      <div>HOC</div>
      <WithZChild x={12}></WithZChild>
    </>
  );
}
