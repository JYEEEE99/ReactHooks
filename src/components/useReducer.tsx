import { useReducer } from "react"

// reducer가 받은 action 타입을 정의한다
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBL' | 'RESET'
// 혀내 사퇘와 action에 기반해 다음 상태를 반화한다
const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT' :
            return currentCount - 1
        case 'DOUBL':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}
type ConuterProps = {
    initialValue: number
}
const Counter = (props: ConuterProps) => {
    const {initialValue} = props
    const [count, setCount] = useReducer(reducer ,initialValue)
    return (
        <>
        <p>Count: {count}</p>
        {/* dispatch 함수에 action을 전달해 상태를 업데이트한다 */}
        <button onClick={() => setCount('DECREMENT')}>+</button>
        <button onClick={() => setCount('INCREMENT')}></button>
        <button onClick={() => setCount('DOUBL')}>x2</button>
        <button onClick={() => setCount('RESET')}>Reset</button>
        </>
    )
}
export default Counter