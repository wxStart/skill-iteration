function getMax(arr) {
  function process(array, L, R) {
    if (L == R) {
      return array[L];
    }
    const mid = L + ((R - L) >> 1);
    const leftMax = process(array, L, mid);
    const rihgtMax = process(array, mid + 1, R);
    return Math.max(leftMax, rihgtMax);
  }

  return process(arr, 0, arr.length - 1);
}

const arr1 = [1, 3, 9, 5, 6,  4];
console.log('getMax: ', getMax(arr1));
//讲解
/***
 * 函数执行过程  最后汇总每个p函数返回的最大值  然后再次执行到 p(0,5)的汇总函数
 * 
 *                        p(0,5)
 *  
 *               p(0,2)                 p(3,5)
 *  
 *         p(0,1)     p(2,2)          p(3,4)     p(5,5)     
 * 
 *    p(0,0) p(0,1)              p(3,3) p(4,4)   
 */

