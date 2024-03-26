/**
 * 数组：[1,3,4,2,5]
 *
 * 1右边比1大的数字有4个  所以4个1
 * 3右边比3大的数字有2个  所以2个3
 * 4右边比4大的数字有1个  所以1个4
 * 2右边比2大个数字有1个  所有1个2
 *
 * 所以小和 4*1 + 2*3 + 1*4 + 1*2 = 16
 *
 */

function mergeSort(arr) {
  // 类型判断和边界问题
  if (!Array.isArray(arr) || arr.length < 2) {
    return array;
  }
  return process(arr, 0, arr.length - 1);
}

function process(arr, l, r) {
  let sum = 0;
  if (l == r) {
    return 0;
  }
  const mid = l + ((r - l) >> 1);
  // 先进性递归让左右 成为两个有序数组 然后进行合并
  /**
   * 也就是说 总内到外保证了 是连个有序的数组
   */
  sum += process(arr, l, mid);
  sum += process(arr, mid + 1, r);
  sum += merge(arr, l, mid, r);
  return sum;
}

function merge(arr, l, m, r) {
  let sum = 0;
  const help = new Array(r - l + 1);
  let i = 0,
    p1 = l,
    p2 = m + 1;
  while (p1 <= m && p2 <= r) {
    // 两个有序数组
    //! 当前arr[p1] 在 arr[p2]后面还有几个比 arr[p1]大的个数
    sum += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
    // 保证右侧先copy 这样算出来的小和才对  如果出现连续几个相同值 通过后面的长度算小和
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]; //! < 不是 <=
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
  return sum;
}

const arr1 = [1,3,4,2,5];

console.log('mergeSort: ', mergeSort(arr1));
