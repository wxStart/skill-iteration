import React from 'react';

export default class Synthesis extends React.Component {
  render() {
    return (
      <>
        <div
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
            onClick={e => {
              console.log('e: ', e);
              console.log('冒泡阶段   内层');
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
