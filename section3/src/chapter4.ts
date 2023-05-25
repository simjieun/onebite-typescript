/*
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 타입
 */
let a: string | number | boolean;
a = "a";
a = 1;
a = true;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "dog",
  color: "white",
};

let union2: Union1 = {
  name: "person",
  language: "korean",
};

let uninon3: Union1 = {
  name: "dog",
  color: "white",
  language: "korean",
};

// let union4: Union1 = {
//   name: "person",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Intersection1 = Dog1 & Person1;

// let intersection1: Intersection1 = {
//   name: "dog",
//   color: "white",
// };
