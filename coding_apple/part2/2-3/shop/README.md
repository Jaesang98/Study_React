## 📦 part2-3 코드 길어지면 import export 하면 됩니다

### 🔹 1. 다른 파일의 정보를 사용하는법

```jsx
//data.js
export default data;
export { data1, data2, data3 };

//App.jsx
import data from "/경로";
import { data1, data2, data3 } from "/경로";
```
