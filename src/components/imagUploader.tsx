import { useRef, useState } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const UPLOAD_DELAY = 5000;
const ImagUploader = () => {
  // 숨겨진 inut 요소에 접근하기 위한 ref
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  // 선택된 파일 데이터를 저장하는 ref
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>("");
  // 이미지 업로드 라는 텍스트가 클릭 됐을 때 콜백
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      //input의 DOM에 접근해서, 클릭 이벤트를 트리거한다
      inputImageRef.current.click();
    }
  };
  // 파일이 선택된 후에 호출되는 콜백
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      // fileRef.current에 값을 저장.
      // fileRef.current가 변화해도 다시 그리기가 발생 하지 않는다
      fileRef.current = files[0];
    }
  };
  // 업로드 버튼이 클랙됐을 때 호출되는 콜백
  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // 보통은 여기에서 API를 호출하고, 파일을 서버에 업로드
      // 역에서는 의사적으로 일정 시간 기다린다
      await sleep(UPLOAD_DELAY);
      // 업로드가 성공했음을 표시하기 위해 메세지를 바꿘 씀
      setMessage(`${fileRef.current.name} 성공적으로 업로드 되었습니다`);
    }
  };
  return (
    <div>
      <p style={{ textDecoration: "underline" }} onClick={onClickText}>
        이미지 업로드
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        style={{ visibility: "hidden" }}
      />
      <br />
      <button onClick={onClickUpload}>업로드 하기</button>
      {message !== null && <p>{message}</p>}
    </div>
  );
};
export default ImagUploader;
