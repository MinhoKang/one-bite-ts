// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준 1. 반환값의 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;

b = a;
// a는 반환값이 number이고 b는 반환값이 10이다.
// number는 10의 슈퍼타입이기 때문에 a는 b로 할당 가능하다.
// 하지만 b는 number의 서브타입이 아니기 때문에 b는 a로 할당할 수 없다.

// 기준 2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같은가

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d;
d = c;

//  매개 변수를 기준으로 판단할 때는 업캐스팅일 때 안 되고, 다운캐스팅일 때 되는 것을 기억하면 된다.

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

// 위에서는 Animal이 Dog의 슈퍼타입

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; //오류
// animalFunc가 더 큰 타입 => 업캐스팅
// animalFunc에 dogFunc를 넣는다는 것은 animalFunc의 타입을 따르면서 매개변수는 dogFunc의 매개변수를 쓴다는 것과 같음
// testFunc와 같아짐 => 오류발생

let testFunc = (animal: Animal) => {
  console.log(dog.name);
  console.log(dog.color);
};

dogFunc = animalFunc; // 가능

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1; // 오류
// func1을 func2로 취급하겠다는 것과 같음
// func1은 매개변수가 2개이고 func2는 매개변수가 1개이기 때문에 오류 발생
// func1의 b가 func2에 들어가지 않기 때문에 오류 발생
// 단, 타입 자체가 호환이 되지 않는다면(다르다면) 그냥 오류 발생
