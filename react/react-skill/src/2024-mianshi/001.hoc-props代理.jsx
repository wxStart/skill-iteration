import React from 'react';

function Hoc(ComA) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'wx',
      };
    }
    onChange = () => {
      this.setState({ name: 'value' });
    };
    render() {
      const newProps = { name: { value: this.state.name, onChange: this.onChange } };
      return <ComA {...this.props} {...newProps} />;
    }
  };
}

function Child(props) {
  return (
    <div>
      Props:{JSON.stringify(props)}
      <button onClick={props.name.onChange}>onChange</button>
    </div>
  );
}
const Index = Hoc(Child);
export default function HocIndex() {
  return <Index index="124"></Index>;
}
