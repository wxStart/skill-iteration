const arr = [1, 2, 2, 3, 3, 4, 4];
const result = arr.reduce((prev, item) => (prev ^= item), 0);
console.log('result: ', result); // 1