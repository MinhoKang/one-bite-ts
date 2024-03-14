// 인덱스드 엑세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author) {
  console.log(`id: ${author.id}, name: ${author.name}`);
}
// 위처럼 하면 author의 타입이 any로 추론되어서 오류 발생
// author의 타입을 명시해주면 오류가 발생하지 않음

function printAuthorInfo(author: { id: number; name: string }) {
  console.log(`id: ${author.id}, name: ${author.name}`);
}
// 위처럼 할 수도 있음.
// 하지만 author의 타입을 명시해주면서 중복되는 코드가 생기고, author에 추가적인 프로퍼티가 생기면 계속해서 수정해줘야 함

// 이 때 인덱스드 엑세스 타입을 사용하면 편리함
// 인덱스드 엑세스 타입은 인터페이스에서 특정 프로퍼티의 타입을 가져올 수 있음
function printAuthorInfo(author: Post["author"]) {
  console.log(`id: ${author.id}, name: ${author.name}`);
}
// author에 추가적인 프로퍼티가 생겨도 수정할 필요가 없음
// Post["author"]에서 "author"는 프로퍼티 이름을 나타냄. 문자열이 아님.
// 만약 author의 타입이 Post["author"]가 아니라 Post["author"]["id"]라면 id의 타입만 가져옴

const post: Post = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "김개발",
  },
};

// 타입이 배열 형태인 경우
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post2: PostList[number] = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "김개발",
    age: 20,
  },
};
// const post2: PostList[0] 처럼 진짜 숫자를 넣어도 무방
// const post2: PostList[0] 일때 0은 타입임. 숫자가 아님
// 따라서 const num = 0; 을 하고 const post2: PostList[num] 이렇게 하면 오류 발생

function printAuthorInfo2(author: PostList[0]["author"]) {
  console.log(`id: ${author.id}, name: ${author.name}`);
}

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean

type TupNum = Tup[number]; // number | string | boolean
// [number]로 하면 세 타입의 최적의 공통 타입을 추출함. => 이 예시에서는 유니온 타입으로 추출
