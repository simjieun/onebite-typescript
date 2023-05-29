/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

// function getPropertyKey(person: Person, key: keyof Person) {
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "심지은",
  age: 36,
};

getPropertyKey(person, "name");
