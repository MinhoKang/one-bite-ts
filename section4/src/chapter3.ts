// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 다르게 호출할 수 있는 기능
// 매개변수가 한 개 -> 매개변수에 20을 곱한 값 출력
// 매개변수가 3개 -> 이 매개변수들을 모두 곱한 값 출력

// 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
func(1);
func(1, 2, 3);
