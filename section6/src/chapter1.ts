/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "심지은",
  age: 36,
  position: "developer",
  work() {
    console.log("일을 합니다.");
  },
};

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일을 합니다.");
  }
}

class ExecutivesOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  work() {
    console.log("일을 잘 합니다.");
  }

  share() {
    console.log("잘했어요!");
  }
}

const employee2 = new Employee("심지은", 36, "developer");
console.log(employee2, employee2.work());

const employee3: Employee = {
  name: "심지은",
  age: 36,
  position: "developer",
  work() {
    console.log("일을 합니다.");
  },
};
