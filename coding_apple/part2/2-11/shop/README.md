## 🖼 part2-11 리액트에서 서버와 통신하려면 ajax 1

### 🔹 1. ajax

- 새로고침 없이도 서버요청 가능

```jsx
//특정값이 변경됬을 때만 실행이 되게 하려면
npm install axios

//import
import axios from "axios";

//실행
axios.get('url쓰기').then((결과)=>{
  console.log(결과.data)
})
```
