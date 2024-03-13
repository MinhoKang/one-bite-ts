// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  //   sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
  // 호출 시그니처로 함수 오버로딩 구현 가능. 화살표 함수로는 불가능
}

const person: Person = {
  name: "강민호",
  sayHi: function () {
    console.log("hello");
  },
  //   satHi(): void // 호출 시그니처로도 가능
};

// interface는 type과 달리 |이나 & 불가능
