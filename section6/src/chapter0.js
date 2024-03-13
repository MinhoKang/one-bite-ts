// 클래스

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //   메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다`);
  }
}

// 클래스를 이용해서 만든 객체 => 인스턴스
let studentB = new Student("강민호", "A+", 20);

class StudentDeveloper {
  // 필드
  name;
  grade;
  age;
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    this.favoriteSkill = favoriteSkill;
  }
  //   메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다`);
  }

  programming() {
    console.log(`저는 ${this.favoriteSkill}를 좋아합니다`);
  }
}

const StudentDeveloper = new StudentDeveloper(
  "강민호",
  "A+",
  20,
  "자바스크립트"
);

// Student클래스와 StudentDeveloper클래스는 중복되는 부분이 많다.
// 상속 이용하기

class StudentDeveloper2 extends Student {
  // 필드

  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 부모 클래스의 생성자 호출
    this.favoriteSkill = favoriteSkill;
  }
  //   메서드

  programming() {
    console.log(`저는 ${this.favoriteSkill}를 좋아합니다`);
  }
}
