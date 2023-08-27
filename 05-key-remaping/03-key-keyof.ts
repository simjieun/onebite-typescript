import { Equal, Expect } from "../helper";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

// Capitalize<T> - Converts the first character of a string to uppercase

type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
