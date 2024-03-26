function swap(arr, i, j) {
  if (i != j) {
    // const tem = arr[i];
    // arr[i] = arr[j];
    // arr[j] = tem;
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
  }
}

// 选择排序
/**
 * 每次把最小的放在 下边为0  次小放在下标为1 的位置 就是找到最小
 * 关键点 找到最小
 */
function selectionSort(arr) {
  // 类型判断和边界问题
  if (!Array.isArray(arr) || arr.length < 2) {
    return array;
  }

  for (let i = 0; i < arr.length; i++) {
    // i 只用取到N-1的位置  最后一个数字自动就是最后一个位置

    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      // 从i位置之后 找到最小数的下标位置
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }

    swap(arr, i, minIndex);
  }

  return arr;
}

let arr1 = [34, 23, 1, 33, 45, 67, 12];

console.log('selectionSort:', selectionSort([...arr1]));

/**
 * !! 冒泡排序  谁大谁往右移动 最大的数在左右边
 * 关键件  大的一直往右边   每轮找到剩余数中最大的
 *  第一轮找到最大的了，
 *  第二轮把次大的排在最大的前面
 */

function bubbleSort(arr) {
  // 类型判断和边界问题
  if (!Array.isArray(arr) || arr.length < 2) {
    return array;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    // 可以认为是循环的个数
    for (let j = 0; j < i; j++) {
      // 这里<i  就是避免j+1 超过了边界
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log('bubbleSort:', bubbleSort([...arr1]));

function insertionSort(array) {
  // 类型判断和边界问题
  if (!Array.isArray(array) || array.length < 2) {
    return array;
  }
  for (let i = 1; i < array.length; i++) { // 0~ i 的位置有序
    for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
      // 左边的数比右边大  就把小的调整到前面，然后再往其前面看  其那面的是否还比我大
      // 一直把自己往前面放 直到前面的数比自己小
      swap(array, j, j + 1);
    }
  }

  return array;
}

console.log('insertionSort:', insertionSort([...arr1]));