## 📦 part2-17 Redux 2 : store에 state 보관하고 쓰는 법

### 🔹 1. store.js

```jsx
//store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
});

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
// name : 'state이름', initialState : 'state값'
// { 작명 : createSlice만든거.reducer }
```

### 🔹 2. 사용하기

```jsx
import { useSelector } from "react-redux";
let a = useSelector((state) => {
  return state;
});
```
