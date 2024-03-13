// 인터페이스와 클래스

// interface는 모두 public이다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// CharacterInterface는 Character의 설계도
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
