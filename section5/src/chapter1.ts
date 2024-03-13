// 인터페이스 확장
// 상속

interface Animal {
  name: string;
  color: string;
}
// Animal이 type이어도 extends를 사용할 수 있다.
interface Dog extends Animal {
  // name: number; // 상속받은 프로퍼티를 재정의할 수 있지만, 타입이 달라서 에러가 난다. => 서브타입이어야 한다.
  //   name: '강아지' // 서브타입이라면 가능
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog = {
  name: "dog",
  color: "white",
  isBark: true,
};

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "dogCat",
  color: "white",
  isBark: true,
  isScratch: true,
  //   하나라도 빠지면 에러가 난다.
};
