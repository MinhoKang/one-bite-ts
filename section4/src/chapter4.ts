// 사용자 정의 타입 가드
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // animal is Dog는 return값이 true일 경우 Dog타입임을 명시
  //   만약 위 과정이 없으면 if (isDog(animal)) {console.log(animal.name, "isBark")}; 에서 aniaml을 Dog로 생각하지 못함
  // return animal.isBark !== undefined; // 이 경우 animal이 좁혀지지 않은 상황이라 오류
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // 원래라면 tag를 추가해서 서로소로 만들어서 진행
  if (isDog(animal)) {
    console.log(animal.name, "isBark");
  } else if (isCat(animal)) {
    console.log(animal.name, "isScratch");
  }
  // 위 방식은 아쉬움이 있음
  // 이 때 사용자 정의 타입 가드를 사용
}
