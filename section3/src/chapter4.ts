// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입

// Union Type (합집합)

let a: string | number | boolean;
let arr: (number | string | boolean)[] = [1, "123", true];
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "강아지",
  color: "갈색",
};

let union2: Union1 = {
  name: "사람",
  language: "한국어",
};

let union3: Union1 = {
  name: "사람",
  color: "노란색",
  language: "한국어",
};

// let union4: Union1 = {
//   name: "",
// color가 없어서 Dog에 해당하지 않음
// language가 없어서 Person에 해당하지 않음
// 따라서 Union1에 해당하지 않음
// };

// Intersection Type (교집합)

let variable: number & string;
// variable은 number이면서 string이어야 함
// number이면서 string인 값은 없음
// 따라서 variable은 never타입(공집합)이 됨
// 보통 객체 타입에서 많이 사용

type Intersection = Dog & Person;
let intersection: Intersection = {
  name: "강아지",
  color: "갈색",
  language: "한국어",
};
// Dog와 Person 교집합이어야 함 -> 둘 다 만족해야 함 -> Dog와 Person의 프로퍼티를 모두 가지고 있어야 함
// 하나라도 빠지면 오류
