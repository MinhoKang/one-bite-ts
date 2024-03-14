// 템플릿 리터럴 타입

type Color = "red" | "blue" | "green";

type Animal = "dog" | "cat" | "monkey";

type ColorAnimal = `${Color}-${Animal}`;

const colorAnimal: ColorAnimal = "";
// colorAnimal에는 red-dog, red-cat, red-monkey, blue-dog, blue-cat, blue-monkey, green-dog, green-cat, green-monkey만 할당 가능
// 마우스 올려보면 위처럼 추론됨
