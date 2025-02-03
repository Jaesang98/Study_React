## 🔗 part1-10 자식이 부모의 state 가져다쓰고 싶을 때는 props

### 🔹 1. props

- 부모컴포넌트에서 자식컴포넌트로 state값을 전달할 수 있다

### 🔹 2. props사용법

```jsx
<자식컴포넌트 작명={state}>
function 자식컴포넌트 (props) {
    return (
        {props.state}
    )
}
//부모에서 자식에게만 전송이 가능 (패륜 불륜안됨)
```
