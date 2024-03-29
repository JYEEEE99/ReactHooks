import { memo, useState } from "react"

type FizzProps = {
    isFizz: boolean
}
// Fizz는 보통의 함수 컴포넌트
// isFizz가 true이면 Fizz라고 표시하고, 그 이외에는 표시하지 않는다
// isFizz의 변화에 관계없이, 부모가 다시 ㅡ려지면 Fizz도 다시 그려짐
const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`)
    return <span>{isFizz? 'Fizz' : ''}</span>
}
type BuzzProps = {
    isBuzz: boolean
}
// Buzz는 메모이제이션한 함수 컴포넌트
// isBuzz가 true면 Buzz라고 표시하고, 그 이외에는 표시 x
// 부모 컴포넌트가 다시 그려져도 isBuzz가 변화하지 않는 한 Buzz는 다시그려지지 않음
const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz } = props
    console.log(`Buzz가 다시 그려졌습니다. isBuzz=${isBuzz}`)
    return (
        <span>
            {isBuzz? 'Buzz' : ''}
        </span>
    )
})
// 이 형식으로 export했을 때는 import { Parent } from ...로 읽는다
export const Parnet = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3=== 0
    const isBuzz = count % 5=== 0
    console.log(`Parnet가 다시 그려졌습니다. count=${count}`)
    return (
        <>
        <button onClick={() => setCount((c) => c+1)}>+1</button>
        <button onClick={() => setCount((c) => c-1)}>-1</button>
        <button onClick={() => setCount((c) => c+10)}>+10</button>
        <button onClick={() => setCount((c) => c-10)}>-10</button>
        <p>{`현재 카운트: ${count}`}</p>
        <p>
            <Fizz isFizz={isFizz} />
            <Buzz isBuzz={isBuzz} />
        </p>
        </>
    )
}
export default Parnet