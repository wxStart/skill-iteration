/**
 * 荷兰国旗问题 🇳🇱  分三块
 * 把[2,3,5,6,7,5,2,3,4,8] 按照是5分成三部分
 */

// 情况1: arr[i] < num, arr[i]和小于区的下一个数交换，小于区向右扩展一位 i++
// 情况2: arr[i] = num, 直接跳下一个数 i++
// 情况3: arr[i] > num, arr[i]和大于区的前一个数交换， i不变  >区域左扩
function groupByNum(array, num) {
  let i = 0,
    less = -1,
    more = array.length;

  while (i < more) {
    if (array[i] < num) {
      swap(array, ++less, i++);
    } else if (array[i] < num) {
      swap(array, --more, i++);
      // 为了保持i不变 所以这里做了--
    } else {
      // 等于的时候什么都不做
      i++;
    }
  }

  // for (i = 0; i < array.length; i++) {
  //   if (array[i] < num) {
  //     swap(array, ++lIndex, i);
  //   } else if (array[i] < num) {
  //     swap(array, --rindex, i--);
  //    // 为了保持i不变 所以这里做了--
  //   }else{
  //       // 等于的时候什么都不做
  //   }
  // }
  return array;
}

function swap(arr, i, j) {
  if (i != j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
  }
}

const arr1 = [2, 3, 5, 6, 7, 5, 2, 3, 4, 8];
console.log('groupByNum: ', groupByNum(arr1, 5));
