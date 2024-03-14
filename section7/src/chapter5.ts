// 프로미스

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

// resolve의 값이 response로 들어감
promise.then((response) => {
  console.log(response); // 20
});

promise.then((response) => {
  console.log(response * 10); // response가 unknwon으로 추론되어서 오류 발생
});
// resolve에서 20을 전달했는데 왜 number로 추론되지 않고 오류 발생?
// 비동기 작업의 결과값을 자동으로 추론하지 못 함

// 아래 처럼 Promise의 타입을 지정해주면 오류가 발생하지 않음
const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("실패");
  }, 3000);
});

promise2.then((response) => {
  console.log(response * 10); // response가 unknwon으로 추론되어서 오류 발생
});
//   new Promise<number>로 타입을 지정하면 response가 number로 추론됨
// 이 때 resolve의 인수도 꼭 number로 지정해야 함

promise2.catch((error) => {
  // error는 any타입으로 추론되기 때문에 타입 좁히기
  if (typeof error === "string") {
    console.log(error); // 실패
  }
});

// 프로미스를 반환하는 함수의 타입 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost() /* : Promise<Post> 여기에 지정해도 문제 없음 */ {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "post title",
        content: "post content",
      });
    }, 3000);
  });
}

// function fetchPost(): Promise<Post> {} 를 더 추천

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
