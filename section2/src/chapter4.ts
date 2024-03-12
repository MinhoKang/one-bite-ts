// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "name1",
  nickname: "nickname1",
  birth: "1990-01-01",
  bio: "hello",
  location: "seoul",
};

function func() {
  // func안에서는 func안에서 정의된 User가 사용
  type User = {};
}

// 인덱스 시그니처
// type CountryCodes = {
//     Korea: string;
//     UnitedStates: string;
//     Canada: string;
// }
type CountryCodes = {
  [key: string]: string;
};
let dountryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  Canada: "ca",
};

type countryNumberCodes = {
  [key: string]: number;
  //   Korea: number;
  //   Korea: string 일경우 오류 발생. number와 동일하거나 호환 가능해야 함
};
let countryNumberCodes: countryNumberCodes = {
  // 인덱스 시그니처는 규칙을 위반하지만 않으면 허용함. 따라서 아무런 프로퍼티가 없더라도 문제가 없음
  // 단 Korea: number가 있다면 Korea는 무조건 있어야 함
  //   Korea: 410,
  //   UnitedStates: 840,
  //   Canada: 124,
};
