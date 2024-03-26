function swap(arr, i, j) {
  if (i != j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
  }
}
function quickSort(array, L, R) {
  if (array.length <= 1) {
    return array;
  }
  if (L < R) {
    swap(array, L + parseInt(Math.random() * (R - L + 1)), R); // 随机选个数作为最后一个
    const p = partition(array, L, R); // 根据最后一个数进行排序
    quickSort(array, L, p[0] - 1); //<区域
    quickSort(array, p[1] + 1, R); // >区域
  }
  return array;
}

/**
 * 处理数组 arr[1...r]的函数
 * 默认用 arr[r]做划分边界， < arr[r]     ==arr[r]  >arr[r] 三个区域
 * 返回等于区域的左边界和右边界  [左边界, 右边界]
 */
function partition(array, L, R) {
  let cIndex = L; // 操作的那个数的位置
  let less = cIndex - 1; // <区域边界
  let more = R; // >区域边界   因为最右侧取了一个数字  所以 是arr1.length - 1，而不是 arr1.length 

  while (cIndex < more) {
    if (array[cIndex] < array[R]) {
      swap(array, ++less, cIndex++); //  小于的放在 两个数字交换 小的就放在前面了  小的区域向右扩
    } else if (array[cIndex] > array[R]) {
      swap(array, --more, cIndex); // 把大的放在后面，大于区域向左扩  打的最后一个值就占据了 cIndex的位置 这个值还没有看 所以不变
    } else {
      cIndex++; // 相等时候就往后看 对比其他值
    }
  }
  swap(array, more, R); // 最后把判别数字和 >区域的第一个数字交换
  return [less + 1, more]; // less+1 才是等于区域的边界
}

/**
 * 概率问题  总体期望的
 * 时间复杂度 O(N*log(N))
 * 空间复杂度 O(log(N))
 * 
 * 不稳定排序
 */
const arr1 = [1, 3, 9, 5, 6, 4];

console.log('quickSort: ', quickSort(arr1, 0, arr1.length - 1));
