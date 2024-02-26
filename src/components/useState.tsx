import { useState } from "react";

type CounterProps = {
    initialValue: number
}
const Counter = (props: CounterProps) => {
    const { initialValue } = props
    // 카운트를 유지하는 첫 번째 상태를 useState()로 선언, 인수에는 초깃값을 지정한다
    // count가 현재상태, setCount가 상태를 업데이트하는 함수다.
    const [count, setCount] = useState(initialValue)
    return (
        <>
        <p>Count: {count}</p>
        {/* setCount를 호출해서 상태 업데이트를 한다 */}
        <button onClick={() => setCount((count) - 1)}>-</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </>
    )
}

export default Counter