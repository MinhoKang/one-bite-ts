// 타입스크립트 클래스

const employee = {
  name: "jake",
  age: 30,
  position: "developer",
  work() {
    console.log("일한다");
  },
};

class Employee {
  name: string;
  age: number;
  posision: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.posision = position;
  }

  work() {
    console.log("일한다");
  }
}

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
}

const employeeB = new Employee("jake", 30, "developer");
// employeeB의 타입은 Developer이다.

const employeeC: Employee = {
  name: "james",
  age: 10,
  posision: "developer",
  work() {
    console.log("일한다");
  },
};
