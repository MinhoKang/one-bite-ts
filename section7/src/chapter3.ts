// 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 30,
};

// 제네릭 인터페이스를 사용할 때는 타입을 명시해야 함

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2", "3"],
};

// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 13,
  key2: 11,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "asd",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "asd",
};

// 제네릭 인터페이스 활용 예시
// 유저 관리 프로그램
// 유저 구분: 학생, 개발자

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User {
  name: string;
  profile: Student | Developer;
}

function goToSchool(user: User) {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다");
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교`);
}
// 함수를 만들 때마다 위처럼 타입 좁히기를 하면 비효율적임
interface User2<T> {
  name: string;
  profile: T;
}

function goToSchool2(user: User2<Student>) {
  //   if (user.profile.type !== "student") {
  //     console.log("잘 못 오셨습니다");
  //     return;
  //   }
  const school = user.profile.school;
  console.log(`${school}로 등교`);
}

// 위처럼 타입을 좁히는 것보다 제네릭을 사용하는 것이 효율적임

const developerUser: User = {
  name: "김개발",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User = {
  name: "김학생",
  profile: {
    type: "student",
    school: "서울대",
  },
};

const developerUser2: User2<Developer> = {
  name: "김개발",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser2: User2<Student> = {
  name: "김학생",
  profile: {
    type: "student",
    school: "서울대",
  },
};

goToSchool2(developerUser2); // 오류
goToSchool2(studentUser2); // 정상
