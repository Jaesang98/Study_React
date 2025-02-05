## 🖼 part2-10 Lifecycle과 useEffect 2

### 🔹 1. useEffect 동작

- 기본적으로 mount update에 실행이 됨

```jsx
//특정값이 변경됬을 때만 실행이 되게 하려면
useEffect(() => {}, [특정값]);

//처음 mount됬을 때만 1회실행됨
useEffect(() => {}, []);

//useEffect가 실행되기전에 코드를 실행
useEffect(() => {
  return () => {
    코드;
  };
}, []);
// 이런건 대부분 기존 데이터를 전부 깔끔하게 지우고 새로시작할 때 사용한다
// 타이머같은 경우에는 변수에 타이머를 저장한 후 return 에 clearTimeout(변수)
// 이렇게 작성해도된다
```
