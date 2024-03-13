// 타입 변수 응용하기

// case1
function swap<T>(a: T, b: T) {
  return [b, a];
}

const [a, b] = swap(1, 2);
const [a1, b1] = swap("1", 2);
// a가 문자열이면 2가 문자열이어야 하므로 오류
// 이 경우 아래와 같이 해결
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

//   case2

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]);
// 1
let str = returnFirstValue(["a", "b", "c"]);
// "a"
let union = returnFirstValue([1, "a", true]);
// 1
// union은 number | string | boolean으로 추론됨\

// union이 number로 특정되기 위해서는 아래와 같이 작성
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let union2 = returnFirstValue2([1, "a", true]);
// union2는 number로 추론됨
// 첫 번째 인덱스의 타입을 T로 지정하고 나머지는 unknown으로 지정(나머지는 안 궁금하다)

// case3
function getLength(data: any) {
  return data.length;
}
let var1 = getLength("hello"); // 5
let var2 = getLength([1, 2, 3]); // 3
let var3 = getLength({ length: 10 }); // 10

//하지만 data가 any타입이기 때문에
let var4 = getLength(10);
// 숫자를 매개변수로 넣어도 오류가 없음

function getLength2<T extends { length: number }>(data: T) {
  return data.length;
}
//   T는 length가 number인 타입으로 제한됨
let var5 = getLength2("hello"); // 5
let var6 = getLength2([1, 2, 3]); // 3
let var7 = getLength2({ length: 10 }); // 10
let var8 = getLength2(10); // length가 숫자가 아니라서 오류
