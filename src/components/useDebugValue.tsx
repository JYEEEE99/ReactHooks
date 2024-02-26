import React, { useCallback, useDebugValue, useState } from "react";

// input용으로 콜백과 현재의 입력 내용을 모은 훅
const useInput = () => {
  // 현재 입력값을 저장하는 훅
  const [state, setState] = useState("");
  // input이 변화하면, 훅 안의 상황을 업데이트 한다
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);
  // 디버그용으로 값을 출력
  // 값은 개발자 도구의 Components 탭에 표시
  useDebugValue(`Input: ${state}`);
  // 현재 입력 내용과 콜백 함수만 반환
  return [state, onChange] as const;
};
const Input = () => {
  const [text, onChangeText] = useInput();
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  );
};
export default Input;
// useInput에서는 input 요소의 onChange가 호출되면 내부 상태를 업데이트 하기 위해
// useState, useCallback을 조합했습니다. 그리고 필요한 데이터나 함수만 return으로 반환합니다.
// Input 컴포넌트에서는 커스텀 훅을 호출해서 상태와 함수를 얻고, iinut 요소에 전달
// 실제로 이 코드를 실행하면 입력딘 텍스트와 같은 내용이 아래 텍스트박스에 표시 됩니다.
