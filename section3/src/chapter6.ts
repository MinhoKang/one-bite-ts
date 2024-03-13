// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person: Person = {};

person.name = "Mark";
person.age = 37;
// 위처럼 하면 person.name, person.age가 정의되지 않았다고 에러가 뜬다.
// 그래서 아래처럼 타입 단언을 해줘야 한다.

let person2 = {} as Person;
// 이처럼 하면 {}를 Person 타입으로 본다.

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "dog",
  color: "white",
  breed: "some breed",
};
// 변수를 초기화 할 때 초기화 하는 값으로 객체 리터럴을 사용하면 초과 프로퍼티 작동
// 따라서 breed가 초과 프로퍼티라고 에러가 뜬다.
// 그래서 아래처럼 타입 단언을 해줘야 한다.

let dog2 = {
  name: "dog",
  color: "white",
  breed: "some breed",
} as Dog;

// 아무 상황에서 쓰는게 아님

// 타입 단언의 규칙
// 값 as 단언 => A as B
// A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 한다.

let num1 = 10 as never;
// 10은 number타입이고 never는 모든 타입의 서브타입이기 때문에 에러가 나지 않는다.
let num2 = 10 as unknown;
// unknown은 모든 타입의 슈퍼타입이기 때문에 에러가 나지 않는다.
let num3 = 10 as string;
// number와 string은 서로 관계가 없기 때문에 에러가 난다. => 교집합이 없다.
let num4 = 10 as unknown as string;
// 위와 같이 하면 오류는 없어지긴 함.
// 다중 단언을 하면 매우 지양해야 한다.

// const 단언
let num5 = 10 as const;
// let을 const로 바꾸는 것과 같다.
// num5에 마우스를 올려보면 num5: 10이라고 나온다.

let cat = {
  name: "cat",
  color: "white",
} as const;
// as const가 붙은 객체는 cat에 마우스를 올려보면 cat: {readonly name: "cat"; readonly color: "white";}라고 나온다.
// 수정이 불가능하다

// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "title",
  author: "author",
};

const length: number = post.author?.length;
// post.author?.length에 옵셔널 체이닝(?)을 사용하기 때문에 undefined일 수 있다.
// 따라서 number로 지정된 length에 오류 발생
const length2: number = post.author!.length;
// Non Null 단언을 사용하면 오류가 발생하지 않는다.
// post.author!.length을 하면 author가 null이나 undefined가 아니라고 단언하는 것이다.