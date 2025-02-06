## 📬 part2-19 state가 object/array일 경우 변경하는 법

### 🔹 1. redux 파라미터

- state변경할 때 파라미터를 보내 수정할 수 있다

```jsx
increase(state, action) {
      state.age += action.payload;
    },
```

### 🔹 2. store slice파일 따로보관

- 사용 할 store가 많으면 각 slice파일들을 따로 만드는게 좋음

```jsx
//stockSlice.js;
import { createSlice } from "@reduxjs/toolkit";
let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});
export default stock;

//store.js;
import { configureStore} from "@reduxjs/toolkit";
import stock from '../stockSlice'
export default configureStore({
  reducer: {
    stock: stock.reducer,
  },
});
```
