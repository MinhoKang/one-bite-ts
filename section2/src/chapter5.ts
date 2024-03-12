// enum(열거형)
// 여러 값들에 각각 이름을 부여해 열거해두고 사용

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
  //   숫자를 할당하지 않아도 위에서부터 0, 1, 2, 3, ... 순으로 할당됨
  //   ADMIN에 10을 할당하면 USER는 11, GUEST는 12가 됨
  // USER에만 10을 할당하면 ADMIN은 0, GUEST는 11이 됨
}

enum Language {
  Korean = "ko",
  English = "en",
}

const user1 = {
  name: "Neo",
  role: Role.ADMIN, //관리자
  language: Language.Korean,
};

const user2 = {
  name: "Dao",
  role: Role.USER, //일반 유저
};
const user3 = {
  name: "Bao",
  role: Role.GUEST, //게스트
};

console.log(user1.role); // 0
// enum은 컴파일 하더라도 js에서 사라지지 않음