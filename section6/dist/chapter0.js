/**
 * 클래스
 */
class Student {
    name;
    grade;
    age;
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    study() {
        console.log(`${this.name}이(가) 공부합니다.`);
    }
    introduce() {
        console.log(`제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`);
    }
}
let studentA = new Student("심지은", "A+", 36);
console.log(studentA);
studentA.study();
studentA.introduce();
export {};
