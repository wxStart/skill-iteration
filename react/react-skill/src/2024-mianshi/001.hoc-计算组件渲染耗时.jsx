import React from 'react';

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'wx',
    };
  }
  componentDidMount() {
    this.setState({ name: Date.now() });
  }
  onChange = () => {
    this.setState({ name: Date.now() });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div>Props:{JSON.stringify(this.props)}</div>
        <button onClick={this.onChange}>onChange</button>
      </div>
    );
  }
}

const withTimeing = Com => {
  let start, end;
  return class extends Com {
    constructor(props) {
      super(props);
      start = 0;
      end = 0;
    }
    componentWillMount() {
      if (super.componentWillMount) {
        super.componentWillMount();
      }
      start = Date.now();
    }
    componentDidMount() {
      if (super.componentDidMount) {
        super.componentDidMount();
      }
      end = Date.now();
      console.log(`组件渲染耗时时间：${end - start}`);
    }
  };
};
const IndexA = withTimeing(A);

export default function HocIndex() {
  return (
    <>
      <IndexA index="124"></IndexA>
    </>
  );
}
