## 🛒 part2-16 장바구니 페이지 만들기 & Redux 1 : Redux Toolkit 설치

### 🔹 1. Redux

- 컴포넌트들이 props없이 state 공유가능

### 🔹 2. 사용

- react버전이 18.1.0 이상인지 확인

#### 설치

```jsx
npm install @reduxjs/toolkit react-redux
```

#### store.js

```jsx
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
});
```

#### main.jsx

```jsx
import { Provider } from "react-redux";
import store from "./store.js";

<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>;
```
