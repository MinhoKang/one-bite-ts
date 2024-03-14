// map메서드

const arr = [1, 2, 3];

function map<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
// it은 number로 추론

map(["h", "q", "e"], (it) => it.toUpperCase());
// it은 string으로 추론
map(["h", "q", "e"], (it) => parseInt(it)); // error
// it은 string으로 추론.
// 따라서 parseInt메서드를 사용할 수 없음

function map2<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map2(["h", "q", "e"], (it) => parseInt(it));
// map2에서 T는 string, U는 parseInt의 반환값인 number로 추론됨

// forEach

const arr2 = [1, 2, 3, 4, 5];

arr2.forEach((it) => {
  console.log(it);
});

function forEach(arr: unknown, callback: (item: unknown) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});
// arr2의 타입이 it의 타입이 되어야 함
// forEach 함수는 매개변수의 타입이 unknown이라 오류

function forEach2<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach2(arr2, (it) => {
  console.log(it.toFixed());
});

forEach2(["a", "b", "c"], (it) => {
  it;
});
