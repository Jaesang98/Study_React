## 🔧 part2-1 새로운 프로젝트 생성 & Bootstrap 사용하기

### 🔹 1. 리액트 부트스트랩 설치

- 레이아웃을 복사 붙여넣기 식으로 편하게 개발가능한 라이브러리다
- className을 통해 커스터마이징 가능하다

```jsx
// 부트스트랩 설치
npm install react-bootstrap bootstrap

// 글로벌 (index.html에 입력)
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous"
/>

// 각 파일에 적용
import 'bootstrap/dist/css/bootstrap.min.css';

// 예시 적용
import { Button } from "react-bootstrap";
<Button>버튼</Button>
```
