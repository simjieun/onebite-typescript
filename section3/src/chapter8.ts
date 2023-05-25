/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
  tag: "ADMIN"; // 태그를 이용해 구분
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}점을 모았습니다.
// Guest -> {name}님은 {visitCount}번 방문했습니다.
function login(user: User) {
  if ("kickCount" in user) {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}점을 모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님은 ${user.visitCount}번 방문했습니다.`);
  }
}

function login2(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}점을 모았습니다.`);
  } else {
    console.log(`${user.name}님은 ${user.visitCount}번 방문했습니다.`);
  }
}

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type FailTask = {
  state: "FAIL";
  error: {
    message: string;
  };
};

type AsyncTask = LoadingTask | SuccessTask | FailTask;

function processResult(task: AsyncTask) {
  if (task.state === "LOADING") {
    console.log("loading...");
  } else if (task.state === "SUCCESS") {
    console.log(task.response.data);
  } else {
    console.log(task.error.message);
  }
}
