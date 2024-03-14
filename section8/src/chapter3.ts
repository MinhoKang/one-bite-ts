// 맵드 타입
// 인터페이스에서는 사용 불가

interface User {
  id: number;
  name: string;
  age: number;
}

// 한 명의 유저 정보 불러오기
function fetchUser(): User {
  return {
    id: 1,
    name: "김사람",
    age: 20,
  };
}

// 한 명의 유저 정보 수정
function updateUser(user: User) {}

updateUser({ id: 1, name: "김사람", age: 25 });
// age만 바꿀건데 다 입력해야 하는 불필요
// 맵드 타입을 사용하면 이런 문제를 해결할 수 있음

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; // ?를 붙이면 전부 옵셔널로 지정됨
  //   [key in "id" | "name" | "age"]: User[key]; // 이렇게 하면 전부 필수로 지정됨
};
// id일 때는 User['id'] number, name일 때는 User['name'] string, age일 때는 User['age'] number로 추론됨

type booleanUser = {
  [key in "id" | "name" | "age"]: boolean; // 전부 boolean으로 지정됨
};

//keyof 연산자와 함께 사용
type booleanUser2 = {
  [key in keyof User]: boolean; // 전부 boolean으로 지정됨
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key]; // 전부 읽기 전용으로 지정됨
};
