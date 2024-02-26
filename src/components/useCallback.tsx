import React, { useCallback, useState } from "react"

type ButtonProps ={
    onClick: () => void
}
// DecrementButton은 보통의 함수 컴포넌트로 버튼을 표시한다
const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props
    console.log('DecrementButton이 다시 그려졌습니다.')
    return <button onClick={onClick}>Decrement</button>
}
// IncrementButton은 메모제이션한 함수 컴포넌트로 버튼을 표시한다
const IncrementButton = React.memo((props: ButtonProps) => {
    const { onClick } = props
    console.log('IncrementButton 다시 그려졌습니다')
    return <button onClick={onClick}>Increment</button>
})
// DoubleButton은 메모이제이션한 함수 컴포넌트를 버튼으로 표시한다
const DoubleButton = React.memo((props: ButtonProps) => {
    const { onClick } = props
    console.log('DoubleButton이 다시 그려졌습니다.')

    return <button onClick={onClick}>Double</button>
})
export const Parnet2 = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((c) => c - 1)
    }
    const increment = () => {
        setCount((c) => c + 1)
    }
    // useCallbakc을 사용해 함수를 메모이제이션 한다
    const double = useCallback(() => {
        setCount((c) => c * 2)
        // 두 번째 인수는 빈 배열이므로 useCallback은 항상 같은 함수를 반환한다
    }, [])
    return (
        <>
        <p>Count: {count}</p>
        {/* 컴포넌트에 함수를 전달 */}
        <DecrementButton onClick={decrement} />
        <IncrementButton onClick={increment} />
        {/* 메모이제이션된 컴포넌트에 메모이제이션된 함수를 전달 */}
        <DoubleButton onClick={double} />
        </>
    )
}
export default Parnet2