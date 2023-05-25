/**
 * 타입 단언 (Type Assertion)
 */
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "심지은";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "멍멍이",
  color: "흰색",
  breed: "진돗개",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // 다중 단언은 가능하나, 가급적 사용하지 않는 것이 좋음

/**
 * const 단언
 */
let num4 = 10 as const; // num4는 10이 아니라 10이라는 값 자체를 타입으로 가짐
let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // cat은 { name: "야옹이", color: "yellow" }이라는 값 자체를 타입으로 가짐, readonly로 설정됨

/**
 * Not Null 타입
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "심지은",
};

const len: number = post.author!.length;
