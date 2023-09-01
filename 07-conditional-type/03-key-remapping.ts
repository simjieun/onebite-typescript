import { Equal, Expect } from '../helper';

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

// 패턴에 맞는 key만 추출하는 타입 
type OnlyIdKeys<T> = {
    [key in keyof T as key extends `${string}${"id" | "Id"}${string}` ? key : never] : T[key]
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
