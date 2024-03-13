// 제네릭
// 모든 타입에 적용 가능하다는 뜻
function func(value: any) {
  return value;
}
let number = func(10);
let string = func("hello");
let boolean = func(true);
// value가 any타입이라 아무거나 들어갈 수 있음.
// return 타입이 정의되어있지 않아 any타입으로 추론됨
// 어떤 인수를 전달하더라도 오류는 없음
// 위 number, string, boolean은 return으로 각각 숫자, 문자열, 불리언을 받더라도 위 이유들로 인해 any타입으로 추론됨

// 우리가 원하는 것은 value의 타입을 그대로 반환하는 것(숫자를 value로 넣으면 숫자를 반환, 문자열을 value로 넣으면 문자열을 반환)
// 이럴 때 제네릭을 사용함

function func2<T>(value: T): T {
  return value;
}
// <T>는 타입 변수를 의미함
let number2 = func2(10);
let string2 = func2("hello");
let boolean2 = func2(true);

// number2, string2, boolean2는 각각 숫자, 문자열, 불리언으로 추론됨

let arr = func2([1, 2, 3]);
// arr의 타입을 튜플로 설정하고 싶다면
let arr2 = func2([1, 2, 3] as [number, number, number]);
// as를 사용하여 타입을 지정해줄 수 있고, 제네릭도 가능함
let arr3 = func2<[number, number, number]>([1, 2, 3]);
