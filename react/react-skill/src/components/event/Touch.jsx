import React from 'react';

class Touch extends React.Component {
  onTouchStart = ev => {
    console.log('e: ', ev);
    ev.changedTouches; // 记录的手指操作的位置
    console.log('ev.changedTouches: ', ev.changedTouches);
    const finger = ev.changedTouches[0]; // pageX和 pageY距离第一屏的位置
    this.touch = {
      startX: finger.pageX,
      startY: finger.pageY,
      isMove: false,
    };
  };
  onTouchMove = ev => {
    const finger = ev.changedTouches[0];
    const { startX, startY } = this.touch;
    let changeX = finger.pageX - startX;
    let changeY = finger.pageY - startY;
    if (Math.abs(changeX) || Math.abs(changeY)) {
      this.touch.isMove = true;
    }
  };
  onTouchEnd = () => {
    const { isMove } = this.touch;

    if (isMove) {
      console.log('滑动事件');
      return;
    }
    console.log('是点击事件');
  };
  render() {
    return (
      <>
        <div>在移动端使用下面的按钮:利用Touch事件模拟,也可以使用fastClick插件</div>
        <div>
          <button onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
            按钮
          </button>
        </div>
      </>
    );
  }
}

export default Touch;
