## 🖼 part2-6 리액트 라우터 2 : navigate, nested routes, outlet

### 🔹 1. useNavigate

React Router에서 페이지 이동을 도와주는 **훅(Hook)**입니다.

#### ✅ 기본 사용법

```jsx
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  let navigate = useNavigate();

  return <button onClick={() => navigate("/경로")}>이동</button>;
};
```

#### ✅ 뒤로 가기 / 앞으로 가기

```jsx
navigate(1); // 앞으로 한 페이지 이동
navigate(-1); // 뒤로 한 페이지 이동
```


### 🔹 2. 404 페이지 설정

존재하지 않는 경로에 대한 처리를 위해 `*`을 사용합니다.

```jsx
<Route path="*" element={<div>404 - 페이지를 찾을 수 없습니다.</div>} />
```

📌 `*`은 모든 경로를 의미하며, 기존에 정의된 경로와 일치하지 않을 경우 해당 컴포넌트가 렌더링된다.


### 🔹 3. 중첩 라우트 (Nested Routes)

- 라우트 안에 또 다른 라우트를 정의할 수 있으며, `Outlet`을 사용하면 **부모 컴포넌트 안에서 자식 컴포넌트가 렌더링**된다.
- 여러 유사한 페이지 필요할 때 사용

#### ✅ 기본 사용법

```jsx
import { Routes, Route, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About 페이지</h2>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}>
        <Route path="member" element={<div>멤버 페이지</div>} />
      </Route>
    </Routes>
  );
};
```

#### ✅ 동작 방식

- `/about`으로 이동하면 **About 페이지**만 보입니다.
- `/about/member`로 이동하면 **About 페이지 + 멤버 페이지**가 함께 렌더링됩니다.
- `Outlet`이 있는 위치에 중첩된 컴포넌트가 표시됩니다.
