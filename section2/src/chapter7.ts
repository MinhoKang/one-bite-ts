// void
// 아무것도 반환하지 않는 함수

// 문자열을 반환하기 때문에 string
function func1(): string {
  return "hello";
}

// 반환하지 않기 때문에 void
function func2(): void {
  console.log("hello");
}
// undefined로 타입을 지정하면 retunr undefined;를 사용해야 한다.
// 이는 타입스크립트가 업데이트 되면서 undefined일 경우 return을 생략할 수 있게 되었다.
function func3(): undefined {
  // return undefined;
}

// never

// 반환을 할 수 없는 경우 never를 사용한다.
// 정상적으로 종료되지 않는 경우.
function func4(): never {
  while (true) {
    console.log("hello");
  }
}

function func5(): never {
  throw new Error("error");
}

// never는 어디에도 할당할 수 없다.
