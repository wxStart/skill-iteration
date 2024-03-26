function swap(arr, i, j) {
  if (i != j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
  }
}

// 和父亲相比 是否交换
function heapInsert(index, array) {
  while (array[index] > array[parseInt((index - 1) / 2)]) {
    swap(array, index, (index - 1) >> 1);
    index = (index - 1) >> 1;
  }
}

// 在头部插入一个数字后 继续让其保持大根堆的方法
function heapify(array, index, heapSize) {
  // heapSize  判断是否越界
  let left = index * 2 + 1;
  while (left < heapSize) {
    // 两个孩子中 谁的值最大  下标给谁  left+1 是右边的孩子
    let maxIndex =
      left + 1 < heapSize && array[left + 1] > array[left] ? left + 1 : left;

    // 根据父和孩子中较大值比较
    maxIndex = array[maxIndex] > array[index] ? maxIndex : index;

    // maxIndex == 父节点 说明不用换
    if (maxIndex === index) {
      break;
    }
    swap(array, maxIndex, index);
    index = maxIndex; // 换位置后  之前index的值位置就变成  maxIndex
    left = maxIndex * 2 + 1; // 计算新的左边孩子的下标
  }
}

function heapSort(array) {
  let heapSize = array.length;
  //   // 先搞成大根堆
  //   for (let index = 0; index < array.length; index++) {
  //     heapInsert(index, array);
  //   }
  //   console.log('array: ', array);

  // 下面的方法更优秀
  for (let index = array.length - 1; index >= 0; index--) {
    heapify(array, index, heapSize); // 调整成新的大根堆
  }

  // 不断替换剩余的最大和最后一个位置
  while (heapSize) {
    swap(array, 0, heapSize - 1); // 把最大和最后一个进行交换
    heapify(array, 0, --heapSize); // 调整成新的大根堆
  }
  return array;
}
const arr1 = [2, 3, 5, 6, 7, 5, 2, 3, 4, 8, 1];
console.log('heapSort: ', heapSort(arr1));

/**
 * 时间复杂度 O(N*log(N))
 * 空间复杂度 O（1）
 */
