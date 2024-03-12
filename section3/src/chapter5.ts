// 타입 추론

let a = 10;
let b = "hello";
// 초기값으로 타입을 추론함
let c = {
  id: "abcd",
  name: "hello",
  profile: {
    age: 10,
  },
};

let { id, name, profile } = c;
let [one, two] = [1, "two"];
// 구조분해를 하더라도 타입을 추론함

// 함수 타입은 return 다음에 오는 반환값을 추론함
function func(message = "hello") {
  return "hello";
}

let d;
// 추론 가능한 정보가 없으므로 any타입으로 추론함

d = 10;
//  number로 추론함
d.toFixed(); //사용 가능
// 여기에서는 number타입으로 추론함

d = "hello";
//string으로 추론함
d.toUpperCase(); // 사용 가능
// d.toFixed(); // 사용 불가능

// any가 계속 바뀌는 것을 any타입의 진화라고 함
// 추천하지는 않음

const num = 10;
// num에 마우스를 올리면 num: 10으로 나옴
// 이는 const라서 바뀌지 않아서 넘버 리터럴로 타입 추론 되는 것
// let으로 선언하면 number -> 타입 넓히기

let arr = [1, "two", true];
// arr에 마우스를 올리면 arr: (string | number | boolean)[]로 나옴
