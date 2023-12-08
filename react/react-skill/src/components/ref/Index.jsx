/* eslint-disable react/no-string-refs */
import React from 'react';

class Child1 extends React.Component {
  state = { count: 1 };
  update() {
    console.log('child update');
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <>
        <div>child1：{this.state.count}</div>
      </>
    );
  }
}

const Child2 = React.forwardRef((props, ref) => {
  console.log('ref: ', ref);
  console.log('props: ', props);
  return (
    <>
      <div>Child2:{props.children}</div>
      <input type="text" ref={ref} placeholder="哈哈哈哈" />
    </>
  );
});

class RefIndex extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log('React.createRef', this.myRef.current);
    console.log('this.refs: ', this.refs);
    console.log('this.elRef: ', this.elRef);
    console.log('this: ', this);
  }
  render() {
    // eslint-disable-next-line react/no-string-refs
    return (
      <>
        <div ref={this.myRef}>refs dom</div>
        <div ref="myRef">refs dom 不推荐</div>
        <div ref={el => (this.elRef = el)}>refs dom 函数的形式</div>
        <Child1 ref={el => (this.child1 = el)}></Child1>
        <button
          onClick={() => {
            this.child1.update();
          }}
        >
          调用child1的update方法
        </button>
        <Child2 ref={el => (this.child2 = el)}>ref转发</Child2>
        <button
          onClick={() => {
            this.child2.focus();
            console.log('this.child2: ', this.child2);
          }}
        >
          获取child2中的dom节点input
        </button>
      </>
    );
  }
}

export default RefIndex;
