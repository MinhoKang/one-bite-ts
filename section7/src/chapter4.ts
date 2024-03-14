// 제네릭 클래스

class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [1,2,4]

// string으로 만들려고 하면 위와 같이 클래스를 새로 만들어야 함
// 이럴 때 제네릭 클래스를 사용

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const stringList = new List(["a", "b", "c"]);
// new List<string>(["a", "b", "c"]);으로 하지 않아도 되는 이유는 전달되는 인수로 타입을 추론할 수 있기 때문
stringList.pop();
stringList.push("d");
stringList.print(); //[ 'a', 'b', 'd']
