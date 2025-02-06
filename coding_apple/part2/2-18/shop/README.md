## 🔧 part2-18 Redux 3 : store의 state 변경하는 법

### 🔹 1. store의 state변경

- state변경 코드를 store.js파일 하나에서 보기 위해 사용

#### state수정 함수 생성

```jsx
//store.js
let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john" + state;
    },
  },
});
export let { changeName } = user.actions;
```

#### state수정 함수 호출

```jsx
//Detail.jsx
import { changeName } from "../store";

funtion Detail() {
  let dispatch = useDispatch();
  return(
    <button
      onClick={() => {
        dispatch(changeName());
      }}
    ></button>
  )
}
```
