function mergeSort(arr) {
  // 类型判断和边界问题
  if (!Array.isArray(arr) || arr.length < 2) {
    return array;
  }

  return process(arr, 0, arr.length - 1);
}

function process(arr, l, r) {
  if (l == r) {
    return;
  }
  const mid = l + ((r - l) >> 1);
  // 先进性递归让左右 成为两个有序数组 然后进行合并
  /**
   * 也就是说 总内到外保证了 是连个有序的数组
   */
  process(arr, l, mid);
  process(arr, mid + 1, r);
  merge(arr, l, mid, r);
  return arr;
}

function merge(arr, l, m, r) {
  const help = new Array(r - l + 1);
  let i = 0,
    p1 = l,
    p2 = m + 1;
  while (p1 <= m && p2 <= r) {
    // 两个有序数组  
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  // 右边越界了  看看左侧有没有剩余
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  // 假如左侧越界了 看看右边有没有剩余的数据
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }
  for (i = 0; i < help.length; i++) {
    arr[l + i] = help[i];
  }
}

const arr1 = [1, 3, 9, 5, 6, 4];

console.log('mergeSort: ', mergeSort(arr1));

/**
 * master
 *  T(N) = 2* T(N/2) + O(N^1)
 * 
 * a = 2  b =2   d= 1
 * 
 *  所以时间复杂度是 O(N*log(N))
 *  空间复杂度  O(N)
 * 
 */
