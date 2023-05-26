/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // name: string;
  // moveSpeed: number;

  constructor(public name: string, public moveSpeed: number) {
    //     this.name = name;
    //     this.moveSpeed = moveSpeed;
  }

  move() {
    console.log(`${this.name} 이동속도는 ${this.moveSpeed}입니다.`);
  }
}
