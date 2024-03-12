// number
// :뒤에 타입을 명시해주는 것을 타입 어노테이션
let num1: number = 123;
let num2: number = 123.123;
let num3: number = 123e-3;
let num4: number = 0x123;
let num5: number = 0b111;
let num6: number = 0o123;
let num7: number = NaN;
let num8: number = Infinity;
let num9: number = -0.123;
// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;
// 임시로 null을 넣어야 하는 경우 tsconfig에서  "strictNullChecks": false 설정
// let numA: number = null;
// 따라서 위에 오류 발생 x

// undefined
let unde1: undefined = undefined;

// 리터럴(값) 타입
let numA: 10 = 10;
// numA = 11; // 오류 발생
let strA: "hello" = "hello";
// strA = "world"; // 오류 발생
let boolA: true = true;
// boolA = false; // 오류 발생
