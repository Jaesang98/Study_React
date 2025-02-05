## 🚦 part2-5 리액트 라우터 1 : 셋팅이랑 기본 라우팅

### 🔹 1. 라우터 설치 및 적용

```jsx
// router설치
npm install react-router-dom@6


//main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


//App.jsx
import { Routes, Route, Link } from "react-router-dom";
<Routes>
    <Route path="/detail" element={<div>상세페이지임</div>} />
    <Route path="/about" element={<div>어바웃페이지임</div>} />
</Routes>
<Link to="/">홈</Link>
```
