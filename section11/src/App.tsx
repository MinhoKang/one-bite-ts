import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./type";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // useState는 초기값으로 타입을 추론
  // useState()라면 undefined로 추론
  // useState<string>()라면 string | undefined로 추론 -> 초기값이 없기 때문에
  // 초기값으로 뭐라도 넣는 것이 좋다

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([...todos, { id: idRef.current++, content: text }]);
  };

  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <Editor onClickAdd={onClickAdd}></Editor>
      {/* <div>children</div> */}
      <div>
        {todos.map((todo) => (
          // <div key={todo.id}>{todo.content}</div>
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
