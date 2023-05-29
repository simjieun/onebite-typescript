/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never; // infer R은 그냥 R로 봐라, infer는 참이되게 만든다?

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
