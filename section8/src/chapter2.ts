// keyof 연산자
// 객체 타입에 적용하는 연산자

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: "name" | "age") {
  return person[key];
}
// 위처럼 key의 타입을 유니온으로 정의하면 나중에 프로퍼티가 추가되면 key에 추가해야 함 => 비효율
// keyof 연산자를 사용하면 프로퍼티 이름을 유니온 타입으로 추출할 수 있음

const person: Person = {
  name: "김사람",
  age: 20,
};

getPropertyKey(person, "name"); // 김사람

// keyof버전

function getPropertyKey2(person: Person, key: keyof Person) {
  return person[key];
}

// keyof Person은 "name" | "age"로 추론됨

// typeof랑 같이 사용 가능
type Person2 = typeof person;
// 위처럼 하면 person의 타입을 추론해서 Person2에 할당함

function getPropertyKey3(person: Person, key: keyof typeof person) {
  return person[key];
}
// 위처럼 key에 타입을 할당하는 것이 아닌 typeof를 이용해서 변수 person을 할당해도 person의 구성요소에 따라 알아서 추론
