// 배열
let numArr: number[] = [1, 2, 3]; //이 방식이 가장 많이 사용됨
let strArr: string[] = ["hello", "world"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let nultiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플은 push나 pop을 사용해도 오류가 발생하지 않음. 따라서 사용을 지양하거나 사용할 때 주의

// 튜플을 사용하는 경우
const users: [string, number][] = [
  ["name1", 123],
  ["name2", 456],
  ["name3", 789],
  //   [5, 'name4'], // 오류 발생. 튜플은 이를 방지할 수 있음.
];

interface User {
  name: string;
  age: number;
}

const userData = { name: "name1", age: 123 } as User;

const userData2 = { name: userData, age: 123 };
const userData3 = { name: userData2, age: 123 };

const usersList2: { name: string; age: number }[] = [
  { name: "name1", age: 20 },
  { name: "name2", age: 30 },
  { name: "name3", age: 40 },
];

typeof usersList2[0] == typeof userData; // true

const usersList: { name: string; age?: "20" | 20 | undefined }[] = [
  { name: "name1", age: 20 },
  { name: "name2" },
  { name: "name3", age: "20" },
];

typeof usersList[1].age == "undefined"; // true
