import React from 'react';

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'wx',
    };
  }
  componentDidMount() {
    console.log('A  componentDidMount');
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

class B extends React.Component {
  render() {
    return <input type="text" />;
  }
}
const HocTree = Com => {
  return class extends Com {
    render() {
      const tree = super.render();
      console.log('tree11: ', tree);

      const newProps = {
        a: '124111',
      };

      if (tree && tree.type == 'input') {
        newProps.value = '给input的默认值';
      }

      const props = {
        ...tree.props,
        ...newProps,
      };
      console.log('props: ', props);
      const newTree = React.cloneElement(tree, props, tree.props.children);
      console.log('newTree: ', newTree);
      return (
        <div>
          <div>克隆出来的节点</div>
          {newTree}
        </div>
      );
    }
  };
};
const IndexA = HocTree(A);
console.log('IndexA: ', IndexA);
const IndexB = HocTree(B);
console.log('IndexB: ', IndexB);
export default function HocIndex() {
  return (
    <>
      <IndexA index="124"></IndexA>
      <IndexB index="124"></IndexB>
    </>
  );
}
