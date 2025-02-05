## 🖼 part2-7 리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기

### 🔹 1. 상세페이지 만들기

- URL 파라미터를 사용하면 여러 개의 상세 페이지를 동적으로 생성가능

#### ✅ URL 구조

```jsx
/detail/123
```

#### ✅ 라우트 설정

```jsx
<Route path="/detail/:id" element={<Detail />} />
```

#### ✅ useParams()사용

```jsx
import { useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams(); // 현재 URL의 파라미터 값 가져오기

  return <div>현재 상품 ID: {id}</div>;
};
```
