## 🎯 part2-26 성능개선 2 : 재렌더링 막는 memo, useMemo

### 🔹 1. memo

- 자식 컴포넌트의 props가 변할때만 재 렌더링 한다

```jsx
let Child = memo(function() {
    console.log('재렌더링됨')
    return <div>자식임</div>
})

function Cart(){
    let [count, setCount] = useState(0)
    return (
    <Child />
    <button onClick={()=>{ setCount(count+1) }}> + </button>
    )
}
```

### 🔹 2. useMemo

- 녹화해서 이벤트 중 느린거나 기능저하시키는것 확인가능
- useEffect랑 같은 문법이다

### 🔹 3. memo useMemo차이점

- memo는 렌더링 되면서 같이 실행
- useMemo는 렌더링이 다 되고나서 실행
