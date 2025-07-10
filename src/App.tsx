import { useState } from "react";

function App() {
  // useState => Hooks
  // useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  // -> 이 함수가 호출되면 배열을 반환한다. => 첫 번째 요소는 상태 값, 두 번째 요소는 상태를 설정하는 함수
  const [value, setValue] = useState<number>(0);
  const [Name, setName] = useState<string>("스나이퍼");
  const [Nickname, setNickname] = useState<string>("");

  const increment = () => setValue(value + 1);
  // const increment = () {
  //   return setValue(value + 1);
  // }
  const decrement = () => setValue(value - 1);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  // useState 함수의 파라미터()에는 상태의 기본값을 넣어줍니다

  return (
    <div>
      <p>
        현태 카운터 값은: <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
      <button onClick={increment}>1 증가</button>
      <button onClick={decrement}>1 감소</button>

      <div>
        <input type="text" value={Name} onChange={onChangeName} />
        <input type="text" value={Nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <b>이름: </b>
        {Name}
        <b>닉네임: </b>
        {Nickname}
      </div>
    </div>
  );
}

export default App;
