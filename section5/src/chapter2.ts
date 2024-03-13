// 인터페이스 합치기
// 선언 합침

// 타입은 동일한 이름으로 여러개 만들면 오류 발생
// type Person = {
//   name: string;
// };
// type Person = {
//   age: string;
// };

interface Person {
  name: string;
}
interface Person {
  //   name: number;
  // 후속으로 name을 재선언할 때는 타입이 같아야 한다. 이는 상속에 있어서 서브타입일 때 가능한 것과는 다르다.

  age: string;
}

// interface는 같은 이름은 하나로 합쳐진다

const person: Person = {
  name: "강민호",
  age: "27",
};

// 모듈 보강

interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: number;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 3, // 이 때 Lib을 새로 만들어서 합쳐야 한다. => 모듈 보강
};
