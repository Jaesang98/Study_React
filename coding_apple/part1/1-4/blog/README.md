## 💾 part1-4 중요한 데이터는 변수말고 state에 담습니다
### 🔹 JSX 규칙
- return() 내부는 하나의 태그로 묶어야 함

### 🔹 useState
#### 1️⃣ 사용 목적
- 값이 변경됬을 때 자동으로 html에 렌더링 되도록 하기위해 사용
- state값이 쓰여진 html의 데이터는 자동 재렌더링이 된다
#### 2️⃣ 사용법
```jsx
import { useState } from 'react';
let [데이터, 데이터변경함수] = useState(초기값);
```
