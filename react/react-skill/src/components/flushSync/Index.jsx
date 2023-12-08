// import { useRef, useState } from 'react';
// import { flushSync } from 'react-dom';

// export default function Index() {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   function handle() {
//     flushSync(() => {
//       setCount(count + 1);
//     });
//     console.log('count: ', count); // 这里是旧值
//     console.log(' ref.current.innerHTML: ', ref.current.innerHTML); // 这里是最新的dom
//   }
//   return (
//     <div ref={ref} onClick={handle}>
//       {count}
//     </div>
//   );
// }

// import React from 'react';
// import { flushSync } from 'react-dom';

// export default class Index extends React.Component {
//   state = {
//     x: 0,
//   };

//   onHandle = () => {
//     console.log('this: ', this);

//     for (let index = 0; index < 20; index++) {
//       // flushSync(() => {
//       this.setState({
//         x: this.state.x + 1,
//       });
//       // });
//       flushSync();
//     }
//   };

//   render() {
//     console.log('render: ');
//     return (
//       <>
//         <div>X:{this.state.x}</div>
//         <button onClick={this.onHandle}>按钮（更新20次值为20）</button>
//       </>
//     );
//   }
// }

import React from 'react';
// import { flushSync } from 'react-dom';

export default class Index extends React.Component {
  state = {
    x: 0,
    a: 1,
  };

  onHandle = () => {
    console.log('this: ', this);

    for (let index = 0; index < 20; index++) {
      /**
       * 相当于放置了20个
       *  setState({
            x: 1,
          });
          所以结果是1

       */
      this.setState({
        x: this.state.x + 1,
      });

      /**
       * 相当于放置了20个
       *  setState(preState=>{
        
             return { x: preState.x + 1 };
       *  });

          相当于放置的是回调函数，在批处理函数的时候，会依次执行，同时返回值会更新state。
          最后把最后一次返回结果进行渲染
          所以结果是20

       */

      this.setState(preState => {
        console.log('c: ', preState); // 这里的c就是state
        return { x: preState.x + 1 };
      });
    }
  };

  render() {
    console.log('render: ');
    console.log('this.state: ', this.state);
    return (
      <>
        <div>X:{this.state.x}</div>
        <button onClick={this.onHandle}>按钮 更新一次值20</button>
      </>
    );
  }
}
