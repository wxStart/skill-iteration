/**
 * 把[2,3,5,6,7,2,3,4,8] 按照是否大于5分成两部分
 * [2,3,5,2,3,4,6,7,8] 6 之前的部分都是小于等于5的数
 */

// 情况1: arr[i] <= num, arr[i]和小于等于区的下一个数交换，小于等于区向右扩展一位 i++
// 情况2: arr[i] > num, 直接跳下一个数 i++

function groupByNum(array, num) {
  let i = 0,
    lIndex = -1;

  for (i = 0; i < array.length; i++) {
    if (array[i] <= num) {
      ++lIndex;
      swap(array, lIndex, i);
    }
  }
  return array;
}

function swap(arr, i, j) {
  if (i != j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
  }
}

const arr1 = [2, 3, 5, 6, 7, 2, 3, 4, 8];
console.log('groupByNum: ', groupByNum(arr1, 5));
