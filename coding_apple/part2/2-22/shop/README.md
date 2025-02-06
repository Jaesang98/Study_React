## 💾 part2-22 localStorage로 만드는 최근 본 상품 기능 1

### 🔹 1. localStorage

-사이트를 꺼도 계속해서 남아있음

```jsx
localStorage.setItem("데이터이름", "데이터");
localStorage.getItem("데이터이름");
localStorage.removeItem("데이터이름");

//array object저장
localStorage.setItem("데이터이름", JSON.stringify({ name: "kim" }));
var a = localStorage.getItem("데이터이름");
var b = JSON.parse(a);
```

### 🔹 2. sessionStorage

- 브라우저 끄면 날라감
- 사용법 로컬스토리지랑 같음
