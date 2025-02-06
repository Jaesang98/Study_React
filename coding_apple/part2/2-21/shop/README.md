## ⚡ part2-21 리액트에서 자주쓰는 if문 작성패턴 5개

### 🔹 1. 컴포넌트 안에서 쓰는 if/else

```jsx
function Component() {
  if (true) {
    return <p>참이면 보여줄 HTML</p>;
  } else {
    return null;
  }
}
```

### 🔹 2. JSX안에서 쓰는 삼항연산자

```jsx
function Component() {
  return <div>{1 === 1 ? <p>참이면 보여줄 HTML</p> : null}</div>;
}
```

### 🔹 3. && 연산자로 if 역할 대신하기

```jsx
function Component() {
  return <div>{1 === 1 && <p>참이면 보여줄 HTML</p>}</div>;
}
```

### 🔹 4. switch / case 조건문

```jsx
function Component2() {
  var user = "seller";
  switch (user) {
    case "seller":
      return <h4>판매자 로그인</h4>;
    case "customer":
      return <h4>구매자 로그인</h4>;
    default:
      return <h4>그냥 로그인</h4>;
  }
}
```

### 🔹 5. object/array 자료형 응용

```jsx
function Component() {
  var 현재상태 = "info";
  return (
    <div>
      {
        {
          info: <p>상품정보</p>,
          shipping: <p>배송관련</p>,
          refund: <p>환불약관</p>,
        }[현재상태]
      }
    </div>
  );
}
```
