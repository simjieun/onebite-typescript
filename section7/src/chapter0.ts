/**
 * 제네릭 :일반적인, 포괄적인 -> 모든 타입의 두루두루 사용할수있는 함수이다
 */
// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);
let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
