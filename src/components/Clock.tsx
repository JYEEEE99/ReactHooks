// useEffect

import { useEffect, useState } from "react"

// 타이머가 호출되는 주기를 1초로 설정
const UpDateSycle = 1000
// 로컬 스토리지에서 사용하는 키
const KeyLocale = 'KEY_LOCALE'
enum Locale {
    US = 'en-US',
    KR = 'ko-KR',
}

const getLocaleFromString = (text: string) => {
    switch (text) {
        case Locale.KR:
            return Locale.KR
        case Locale.US:
            return Locale.US
        default:
            return Locale.KR
    }
}
const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.KR)
    // 타이머를 설정하기 위한 부가작용
    useEffect(() => {
        //타이머 셋
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UpDateSycle)
        // 클린업 함수를 전달하고, 언마운트 시에 타이머를 해제
        return () => {
            clearInterval(timer)
        }
        //초기 그리기 시에만 실행함
    }, [])
    // 로컬 스토리지에서 값을 로딩
    useEffect(() => {
        const savedLocale = localStorage.getItem(KeyLocale)
        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale))
        }
    }, [])
    // 로케일이 바뀌었을 때 로컬 스토리지에 값을 저장
    useEffect(() => {
        localStorage.setItem(KeyLocale, locale)
        // 의존 배열에 로케일을 전달하고 로케일이 변할 때마다 실행
    }, [locale])
    return (
        <div>
            <p>
                <span id="current-time-label">현재 시각</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value="ko-KR">KR</option>
                    <option value="en-US">US</option>
                </select>
            </p>
        </div>
    )
}
export default Clock