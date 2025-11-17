let s1: string = "123";
let n1: number = 123;
let b1: boolean = true;

// 大写是装饰类型 一般都是包装类
let s2: String = new String("123");
// s1 = s2; 报错
s2 = s1;

let nArr: number[] = [1, 2, 3];
let sArr: string[] = ["1", "2", "3"];
let nOrSArr: (number | string)[] = [1, "2", 3];
let s1Arr: Array<string> = ["1", "2", "3"];

// 元组 固定长度的数组, 越界访问报错
let t1: [string, number] = ["123", 123];
let t2 = ["123", 123, true];
t2.push('456');
t1.push('456'); // 元祖可以使用数组的方法
// t1[2] = '456';  报错 元组的元素是固定的 不能改变



enum Color {
  Red,
  Green,
  Blue,
}

export {};
