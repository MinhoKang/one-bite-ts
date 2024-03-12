// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; //가능. number가 10보다 더 큰 집합이기 때문에

// 객체 타입간의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "노란색",
};

let dog: Dog = {
  name: "강아지",
  color: "갈색",
  breed: "푸들",
};

animal = dog;
// dog= animal

// 객체는 프로퍼티를 기준으로 타입 호환성을 따진다.
// Dog는 Animal의 모든 프로퍼티를 포함하고 있고 추가로 breed라는 프로퍼티를 가지고 있음
// 구조적 타입 시스템을 따르기 때문에 Animal의 프로퍼티들을 가지고 있으면 Animal 타입으로 취급해도 무방하다.
// Dog타입에 해당하면 Animal타입의 프로퍼티를 무조건 가지고 있을 것이라서
// 반면 Animal타입에 해당하면 Dog타입의 프로퍼티를 가지고 있을 것이라고 보장할 수 없음. breed가 없기 때문

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
  name: "코딩책",
  price: 20000,
  skill: "typescript",
};

book = programmingBook;

let book2: Book = {
  name: "코딩책",
  price: 20000,
  //   skill: "typescript",
};

// book=programmingBook;은 가능했는데, book2: Book에 skills를 넣으면 오류 발생
// book = programmingBook;와 동일한 코드인데 이상함
// 이는 초과 프로퍼티 검사 때문임
// 초과 프로퍼티 검사: 객체 리터럴이나 다른 변수를 할당할 때, 초과 프로퍼티가 있는지 검사하는 것
// 초기화 할 때(초기값을 지정할 때) 발동. 초과 프로퍼티(실제 타입에 없는 프로퍼티)가 있는지 검사

// 이를 피하려면
let book3: Book = programmingBook;
// 객체 리터럴을 사용한 것은 아니기 때문에 초과 프로퍼티 검사가 발동하지 않음

function func(book: Book) {}
// 인수로 보내려고 해도 초과 프로퍼티는 발동
func(programmingBook);
// 변수에 저장했다가 인수에 넣어야 함
