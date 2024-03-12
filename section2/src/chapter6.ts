// any
// 특정 변수의 타입을 확실히 모를 때
// 사용하지 않아야 함

let anyVar: any = 10;
anyVar = "hello";
anyVar = {};
anyVar = () => {};

anyVar = "hello";
// any는 변수로도 넣을 수 있음
let num: number = 1;
num = anyVar;

// 문자열에서만 쓰는 메소드를 사용할 수 있음
anyVar.toUpperCase();

// undknown
let unknwonVar: unknown;

// any와 비슷하게 모든 타입을 넣을 수 있음
unknwonVar = 10;
unknwonVar = "hello";
unknwonVar = () => {};
// 하지만 any와 다르게 unknown은 다른 타입에 할당할 수 없음

// unknwonVar.toUpperCase(); // 오류 발생

// 아래의 타입 정제 과정을 거쳐야 함
if (typeof unknwonVar === "string") {
  unknwonVar.toUpperCase();
}
console.log(unknwonVar);
