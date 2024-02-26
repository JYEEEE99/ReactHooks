import React, { useMemo, useState } from "react"

const UseMemoSample = () => {
    // text는 현재의 텍스트 박스의 내용을 저장
    const [text, setText] = useState('')
    // items는 문자열 리스트를 저장
    const [items, setItems] = useState<string[]>([])
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    // 버튼을 클릭했을 때 호출되는 함수
    const onClickButton = () => {
        setItems((prevItems) => {
            // 현재의 입력값을 items에 추가한다. 이때, 새로운 배열을 작성해서 저장!
            return [...prevItems, text]
        })
        //텍스트 박스 안의 값을 비운다
        setText('')
    }
    //numberOfCharacters1은 닷 그릴 때마다 items.reduce를 실행해서 결과를 얻는다
    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
    // numberOfCharacters2는 useMemo를 사용해, items가 업데이트되는 시점에 items.reduce를 실행해서 결과를 얻는다
    const numberOfCharacters2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0)
        // 두 번째 인수의 배열안에 items가 있으므로 items가 새롭게 됐을 때만 함수를 실행해서 메모를 업데이트한다
    }, [items])
    return (
        <div>
        <p>UseMemoSample</p>
        <div>
            <input value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>Add</button>
        </div>
        <div>
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
        <div>
        <p>Total Numer of Characters 1: {numberOfCharacters1}</p>
        <p>Total Numer of Characters 2: {numberOfCharacters2}</p>
        </div>
        </div>
    )
}
export default UseMemoSample