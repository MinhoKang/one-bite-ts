// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 이야기

function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수 타입 정의

const add = (a: number, b: number): number => {
  return a + b;
};

// 함수의 매개변수

function introduce(name = "강민호", tall?: number) {
  // 만약 매개변수에 name = "강민호", tall?: number, age = 10이라면
  // 오류 발생
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`);
  console.log(`tall: ${tall + 10}`); // tall이 undefined일 수 있기 때문에 에러가 난다.
  // 따라서 타입 가드를 만들어 사용
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("강민호", 175);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((num) => (sum += num));
  return sum;
}

getSum(1, 2, 3, 4, 5); // 15