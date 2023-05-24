let numArr: number[] = [1, 2, 3];
let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | boolean | string)[] = [1, false, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2],
  [3, 4],
];

// 튜플 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string] = [1, "hello"];

const users: [string, number][] = [
  ["심지은", 1],
  ["심지은아", 2],
  ["잘하고있다", 3],
  ["사랑해나를", 4],
];
