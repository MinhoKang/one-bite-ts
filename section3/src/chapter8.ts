// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
  tag: "admin";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "member";
  name: string;
  point: number;
};
type Guest = {
  tag: "guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin => {name} 님 현재까지 {kickCount}번 강퇴 하셨습니다.
// Member => {name} 님의 포인트는 {point}점 입니다.
// Guest => {name} 님은 {visitCount}번 방문 하셨습니다.
function login(user: User) {
  if ("kickCount" in user) {
    console.log(
      `${user.name} 님 현재까지 ${user.kickCount}번 강퇴 하셨습니다.`
    );
  } else if ("point" in user) {
    console.log(`${user.name} 님의 포인트는 ${user.point}점 입니다.`);
  } else {
    console.log(`${user.name} 님은 ${user.visitCount}번 방문 하셨습니다.`);
  }
}
// 모르는 사람이 위 코드를 보면 직관적으로 이해하기 어렵다.
// 이 때 서로소 유니온 타입을 사용하면 된다.
// 1. 각 타입에 tag: "admin", tag: "member", tag: "guest"를 추가한다.
// tag를 단 순간 각각 교집합은 없어진다.
// tag가 없을 때 Admin과 Member의 교집합은 name, kickCount, point가 있는 타입이다.
// tag가 있다면 tag가 admin이어야 하고, 동시에 tag가 member여야 하는데 이는 불가능하다.
function login2(user: User) {
  if (user.tag === "admin") {
    console.log(
      `${user.name} 님 현재까지 ${user.kickCount}번 강퇴 하셨습니다.`
    );
  } else if (user.tag === "member") {
    console.log(`${user.name} 님의 포인트는 ${user.point}점 입니다.`);
  } else {
    console.log(`${user.name} 님은 ${user.visitCount}번 방문 하셨습니다.`);
  }
}
// switch문을 사용해도 된다.
function login3(user: User) {
  switch (user.tag) {
    case "admin":
      console.log(
        `${user.name} 님 현재까지 ${user.kickCount}번 강퇴 하셨습니다.`
      );
      break;
    case "member":
      console.log(`${user.name} 님의 포인트는 ${user.point}점 입니다.`);
      break;
    case "guest":
      console.log(`${user.name} 님은 ${user.visitCount}번 방문 하셨습니다.`);
      break;
  }
}

// 복습 및 예시

// 비동기 작업의 결과를 처리하는 객체

// type AsyncTask = {
//   state: "loading" | "failed" | "success";
//   response?: {
//     data: unknown;
//   };
//   error?: {
//     message: string;
//   };
// };

type AsyncTask = LoadingState | FailedState | SuccessState;
// 이렇게 하면 case failed일 때 타입 좁히기가 가능

const loading: AsyncTask = {
  state: "loading",
};

const failed: AsyncTask = {
  state: "failed",
  error: {
    message: "잘못된 요청입니다.",
  },
};

const success: AsyncTask = {
  state: "success",
  response: {
    data: "성공했습니다.",
  },
};

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "loading": {
      console.log("로딩중");
      break;
    }
    case "failed": {
    //   console.log(task.error?.message);
      console.log(task.error.message);
      break;
    }
    case "success": {
    //   console.log(task.response?.data);
      console.log(task.response.data);
      break;
    }
  }
  //   옵셔널 체이닝을 없애는게 좋음
}

// 옵셔널 체이닝을 없애기 위해 각각의 타입을 만든다.

type LoadingState = {
  state: "loading";
};

type FailedState = {
  state: "failed";
  error: {
    message: string;
  };
};

type SuccessState = {
  state: "success";
  response: {
    data: string;
  };
};

// 이후 AsyncTask를 이 타입들로 만든다. (85번째 줄 참고)
