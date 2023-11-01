import React from 'react';

class Synthesis extends React.Component {
  componentDidMount() {
    document.getElementById('outer').addEventListener('click', function () {
      console.log('outer  原生冒泡');
    });
    document.getElementById('outer').addEventListener(
      'click',
      function () {
        console.log('outer  原生捕获');
      },
      true,
    );
    document.getElementById('inner').addEventListener('click', function (e) {
      e.stopPropagation(); // 原生事件上面执行了阻止   合成事件的冒泡节点就不会执行  因为root的冒泡事件就不会执行了
      console.log('inner  原生冒泡');
    });
    document.getElementById('inner').addEventListener(
      'click',
      function () {
        console.log('inner  原生捕获');
      },
      true,
    );
  }
  render() {
    return (
      <>
        <div>组合事件的捕获阶段先执行，然后执行原生的捕获阶段函数,原生的</div>
        <div
          id="outer"
          onClick={() => {
            console.log('冒泡阶段   外层');
          }}
          onClickCapture={() => {
            console.log('捕获阶段   外层');
          }}
          style={{ background: 'red' }}
        >
          外层
          <div
            id="inner"
            onClick={e => {
              console.log('e: ', e);
              console.log('冒泡阶段   内层');
              e.stopPropagation(); // 合成事件中“阻止事件传播”：阻止原生事件传播 和 阻止合成事件中的事件传播
              // e.nativeEvent.stopPropagation(); // 原生事件中“阻止事件传播”：阻止原生事件的传播
            }}
            onClickCapture={() => {
              console.log('捕获阶段   内层');
            }}
            style={{ background: 'green' }}
          >
            内层
          </div>
        </div>
      </>
    );
  }
}

export default Synthesis;
