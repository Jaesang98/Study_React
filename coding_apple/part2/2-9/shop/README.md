## ⏳ part2-9 Lifecycle과 useEffect 1

### 🔹 1. 컴포넌트 LifeCycle

- mount(생성)
- update(재렌더링)
- unmount(삭제)

### 🔹 2. useEffect

- `mount, update`시 코드를 실행해준다
- 실행 시 2번 호출은 디버깅을 위해서이고, 실제 배포하면 1번만 실행된다
- `React.StrictMode`를 없애면 2번 호출 안됨

```jsx
useEffect(() => {
  코드;
});
```

### 🔹 3. useEffect 사용이유

- 실행시점은 html렌더링 후에 동작을 한다

### 🔹 4. 사용시기

- 어려운 연산 or 오래걸리는 연산
- 서버에서 데이터를 가져올 때
- 타이머 장착했을 때
