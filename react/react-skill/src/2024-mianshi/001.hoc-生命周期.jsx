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
        <button onClick={this.onChange}>onChange</button>
      </div>
    );
  }
}
const HocExtends = Com => {
  const didMount = Com.prototype.componentDidMount;
  console.log('didMount: ', didMount);
  return class extends Com {
    componentDidMount() {
      console.log('HocExtends componentDidMount');
      if (didMount) {
        didMount.apply(this);
      }
      this.setState({ name: '1234' });
    }
    render() {
      console.log(this.state);
      return super.render();
    }
  };
};
const Index = HocExtends(A);

export default function HocIndex() {
  return <Index index="124"></Index>;
}
