## 🔄 part2-15 props 싫으면 Context API 써도 됩니다

### 🔹 1. Context API

- props 전송없이 state공유가능

### 🔹 2. Context API 잘 안쓰는 이유

- state 변경시 쓸데없는 컴포넌트까지 전부 재렌더링이 된다
- useContext() 를 쓰고 있는 컴포넌트는 나중에 다른 파일에서 재사용할 때 Context를 import 하는게 귀찮아질 수 있습니다.
