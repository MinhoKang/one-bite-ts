// 접근 제어자

class Employee {
  // 아무 것도 없으면 public으로 설정

  private name: string; // private은 클래스 내부에서만 접근 가능
  protected age: number; // protected는 클래스 내부와 상속받은 클래스에서만 접근 가능
  posision: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.posision = position;
  }
  //   생성자에 접근제어자를 달면 알아서 필드로 설정된다.
  //   constructor(private name: string, protected age: number, public position: string) {
  //     생성자에 접근제어자를 달면 알아서 this.name = name; this.age = age; this.position = position;을 해준다. => 없어도 무관
  //    this.name = name;
  //     this.age = age;
  //     this.posision = position;
  //   }

  work() {
    console.log("일한다");
  }
}

const employee = new Employee("jake", 30, "developer");

class Executive extends Employee {
  // 필드
  officeNumber: number;
  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  func() {
    this.age;
    // this.name; // private은 상속받은 클래스에서도 접근 불가능
  }
}
