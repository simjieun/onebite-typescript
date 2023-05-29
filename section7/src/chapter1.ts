/**
 * 첫번째 사례
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("122", 2);

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]);
// 1

let str = returnFirstValue([1, "a", "b", "c"]);
// "a"

/**
 * 세번째 사례
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("hello");
let var3 = getLength({ length: 100 });
// let var4 = getLength(10);
