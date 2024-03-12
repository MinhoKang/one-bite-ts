// unknown
// 타입 계층도의 최상단에 있음. 모든 타입들의 슈퍼 타입
// unknown이라는 집합 안에 모든 타입이 포함되어 있음
function unknownExam() {
  let a: unknown = 30;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  //  unknown에 모든 타입이 들어가는건 업캐스팅이라고 볼 수 있음

  let unknownVar: unknown;
  //   let num: number = unknownVar; // error
  //   다운캐스팅이라 불가능
}

// never
// 공집합

function neverExam() {
  // 반환할 수 있는 종류의 값이 없다 -> 공집합 -> never
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  //   업캐스팅이기 때문에 가능

  //   let never1: never = 10;
  //   let never2: never = "hello";
  //   let never3: never = true;
  //   다운캐스팅이라 불가능
}

// void
function voidExam() {
  function voidFunc(): void {
    console.log("hello");
    return undefined;
  }
  //   업캐스팅
  let voidVar: void = undefined;
}

// any
// 모든 타입의 슈퍼 타입이기도 하고, 서브 타입이기도 함
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  //   anyVar에 unknownVar를 할당하는 것은 다운캐스팅임에도 가능
  anyVar = unknownVar;

  let undefinedVar: undefined;
  undefinedVar = anyVar;

  let neverVar: never;
//   neverVar = anyVar;
  //   naver타입은 매우 순수한 공집합이라서 아무리 any라도 never에 할당할 수 없음
}
