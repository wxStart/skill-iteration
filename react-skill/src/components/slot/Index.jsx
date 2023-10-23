import React from 'react';
function SlotFun(props) {
  let { children, c } = props;
  children = React.Children.toArray(children);
  const footerSlot = [],
    headerSlot = [],
    defaultSlot = [];
  let C = () => {};
  children.forEach(child => {
    const { slot } = child.props;
    if (slot == 'header') {
      headerSlot.push(child);
    } else if (slot == 'footer') {
      footerSlot.push(child);
    } else if (slot == 'c') {
      C = child.type;
      console.log('child: ', child);
    } else {
      defaultSlot.push(child);
    }
  });

  return (
    <>
      <h2>这里是headerSlot</h2>
      {headerSlot}
      <h2>这里是defaultSlot</h2>
      {defaultSlot}
      <h2>这里是 footerSlot</h2>
      {footerSlot}
      {C({ title: '12321' })}
      <C title="我是作用域插槽传递过来的值"></C>
      {c({ title: '我是通过函数实现的插槽传递过来的值' })}
    </>
  );
}

function Scope(props) {
  return <div>作用域插槽:{props.title}</div>;
}

export default function () {
  return (
    <>
      <SlotFun c={v => <Scope {...v}></Scope>}>
        <h3 slot="header">header1</h3>
        <h5>default</h5>
        <h3 slot="footer">footer</h3>
        <h3 slot="header">header2</h3>
        <Scope slot="c"></Scope>
      </SlotFun>
    </>
  );
}
