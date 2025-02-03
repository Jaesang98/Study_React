## 🎯 part1-8 리액트 환경에서 동적인 UI 만드는 법 (모달창만들기)

### 🔹 1. 동적 UI만드는 스텝

- UI 디자인 완성
- UI 현재 상태를 state에 저장
- state에 따라 UI가 어떻게 보일지 작성

### 🔹 2. 요소 show hide처리

```jsx
// useState는 작명, set작명 이렇게 적는게 관습입니다
let [변수1, set변수1] = useState(false)
{
변수1 ? 요소 : null
}
=> 이렇게 요소를 show hide시킬 수 있다
```
