/**
 * 접근 제어자
 * access modifier
 * => public, protected, private
 */

class Employee {
  private name: string;
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

const employee = new Employee("심지은", 36, "developer");
// employee.name = "joy";
employee.age = 37;
employee.position = "developer";
