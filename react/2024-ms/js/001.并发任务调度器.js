//  同一时间允许执行的任务

/**
 * max: 允许执行的任务数
 * count: 正在执行的任务数
 */

class Scheduler {
  constructor(max) {
    this.max = max;
    this.count = 0;
    this.queue = [];
    // 队列;
  }
  async add(promiseCreater) {
    if (this.count >= this.max) {
      await new Promise((resolve, reject) => {
        this.queue.push(resolve);
      });
    }
    this.count++;
    // 获取当期入参的任务
    let res = await promiseCreater();
    this.count--;
    if (this.queue.length) {
      this.queue.shift()(); // 
    }
    return res;
  }
}

const timeoutfn = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const scheduler = new Scheduler(2);

const addTask = (time, order) => {
  scheduler.add(() => timeoutfn(time).then(() => console.log('order', order)));
};

addTask(1000,'1')
addTask(500,'2')
addTask(300,'3')
addTask(400,'4') // 1.2