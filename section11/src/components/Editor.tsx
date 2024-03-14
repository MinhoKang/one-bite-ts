import React, { ReactElement, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
//   children: ReactElement;
//   children을 사용하기 위해서 ReactElement로 정의해야 한다
}

const Editor = (props: Props) => {
  const [text, setText] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // onchange에 있는 e에 마우스를 올려보면 추론값이 나옴
    setText(e.target.value);
  };
  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input
        value={text}
        onChange={onChangeInput /*(e) => setText(e.target.value)*/}
      />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
};

export default Editor;
