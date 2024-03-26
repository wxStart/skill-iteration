const array = [1, 1, 1, 5, 2, 2, 3, 3, 4, 4]; // 这里面1 和 5是这两个数

let eor = 0;
let one = 0;

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  eor ^= element; // 这里的结果是两个出现奇数次的数的异或结果
}
console.log('eor: ', eor); // 这里是两个数的异或结果
// console.log('1^5: ', 1 ^ 5);

//  假设 eor的二进制表示如下
//         eor :  100100
//         取反 :  011011
//        取反+1:  011100
// eor & (取反+1): 000100  按位与
let rightBitIsOne = eor & (~eor + 1); //! 提取最右侧是1的那个数   二进制100 这个数也就是4

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if ((element & rightBitIsOne) == 0) {
    one ^= element;
  }
}
const otherNumber = eor ^ one;

console.log(`这两个数分别是：${one}和${otherNumber}`); // 这里找到了 5和1
