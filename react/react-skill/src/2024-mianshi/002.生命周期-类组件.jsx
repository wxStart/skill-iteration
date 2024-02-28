import React from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: Date.now() };
    console.log('constructor : Parent ');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps : Parent ', props, state);
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount : Parent ');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount : Parent ');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate : Parent:    ', nextProps, nextState, nextContext);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate : Parent:    ', prevProps, prevState);
    return '我是传递给 componentDidUpdate 的值 ';
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate : Parent:  ', prevProps, prevState, snapshot);
  }

  render() {
    console.log('render : Parent ');
    return (
      <>
        <div>
          <h1>父组件</h1>
          <button
            onClick={() => {
              this.setState({ time: Date.now() });
            }}
          >
            {this.state.time}
          </button>
          <Child pTime={this.state.time}></Child>
        </div>
      </>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: Date.now() };
    console.log('constructor : Child ');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps : Child ', props, state);
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount : Child ');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount : Child ');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate : Child:    ', nextProps, nextState, nextContext);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate : Child:    ', prevProps, prevState);
    return '我是传递给 componentDidUpdate 的值 ';
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate : Child:  ', prevProps, prevState, snapshot);
  }

  render() {
    console.log('render : Child ');
    return (
      <>
        <div>
          <h1>子组件</h1>
          <h1>pTime:{this.props.pTime}</h1>
          <button
            onClick={() => {
              this.setState({ time: Date.now() });
            }}
          >
            {this.state.time}
          </button>
          <br />
          <Son pTime={this.props.pTime} cTime={this.state.time}></Son>
        </div>
      </>
    );
  }
}

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: Date.now() };
    console.log('constructor : Son ');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps : Son ', props, state);
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount : Son ');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount : Son ');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate : Son:    ', nextProps, nextState, nextContext);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate : Son:    ', prevProps, prevState);
    return '我是传递给 componentDidUpdate 的值 ';
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate : Son:  ', prevProps, prevState, snapshot);
  }

  render() {
    console.log('render : Son ');
    return (
      <>
        <div>
          <h1>孙子组件</h1>
          <h1>pTime:{this.props.pTime}</h1>
          <h1>cTime:{this.props.cTime}</h1>
          <button
            onClick={() => {
              this.setState({ time: Date.now() });
            }}
          >
            {this.state.time}
          </button>
        </div>
      </>
    );
  }
}

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          切换组件
        </button>
      </div>
      {show ? <Parent></Parent> : null}
    </div>
  );
}

export default index;
