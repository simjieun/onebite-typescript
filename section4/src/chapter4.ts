/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined; // animal에 타입단언을 해준다
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined; // animal에 타입단언을 해준다
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else if ("isScratch" in animal) {
    animal;
  }
}
