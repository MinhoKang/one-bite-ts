// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법'

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  // value가 number라면 toFixed()
  // value가 string이라면 toUpperCase()
  // value가 Date라면 getTime()
  value;
  // value는 number | string으로 추론
  // 따라서 toFixed()와 toUpperCase()를 사용할 수 없다.

  if (typeof value === "number") {
    console.log(value.toFixed());
    // console.log() 안에서 value는 number로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // console.log() 안에서 value는 string으로 추론
  } else if (value instanceof Date) {
    // 만약 typeof value === 'object'로 하면 Date가 아닌 다른 객체도 들어올 수 있기 때문에 instanceof를 사용한다.
    // instanceof는 value가 Date의 인스턴스인지 확인한다.
    console.log(value.getTime());
    // console.log() 안에서 value는 Date로 추론
  } else if (value && "age" in value) {
    // value instanceof Person 로 하면 오류 발생
    // instanceof의 오른쪽에는 타입이 오면 안 된다.
    // 'age' in value는 value안에 age가 있는지 확인한다.
    // 단 value의 타입에 null이 있기 때문에 value에 오류 발생.
    // 따라서 null을 제외하고 확인해야 한다. => &&
    console.log(`${value.name} 은 ${value.age}살입니다.`);
  }
  // typeof처럼 타입을 좁히는 것을 타입 가드라고 함
}
