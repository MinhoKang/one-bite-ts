// 조건부 타입

type A = number extends string ? string : number;
// number가 string에 할당 가능한지 확인하고 가능하면 string을 할당하고 불가능하면 number를 할당
// number는 string에 할당 불가능하므로 number를 할당

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;
// ObjB extends ObjA는 참이므로 B는 number로 추론됨

// 제네릭과 함께 사용
// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

function removeSpaces(text: string) {
  return text.replaceAll(" ", "");
}

let result = removeSpaces("Hello World");

function removeSpaces2<T>(text: T): T extends string ? string : undefined;
function removeSpaces2<T>(text: T) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result2 = removeSpaces2(undefined); // undefined

// 다시 들어보기
