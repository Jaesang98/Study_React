## 🚀 part2-25 성능개선 1 : 개발자도구 & lazy import

### 🔹 1. React DevTools

- state, props 조회가능

### 🔹 2. Profiler 성능측정

- 녹화해서 이벤트 중 느린거나 기능저하시키는것 확인가능

### 🔹 3. Redux DevTools

- Redux store에 있던 state를 전부 확인가능

### 🔹 4. lazy, Suspense import

- lazy: 필요할때만 임포트 한것을 가져와 첫 페이지 로딩속도를 향상
- Suspense : 화면 로딩창

```jsx
const Cart = lazy( () => import('./routes/Cart.js') )
<Suspense fallback={ <div>로딩중임</div> }>
    <Detail shoes={shoes} />
</Suspense>
```
