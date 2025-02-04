## 🔄 part1-6 array, object state 변경하는 법

### 🔹 array object수정

- array object 를 변수에 담을 때는 램에 있는 array object값을 담는게 아닌 그것을 가리키는 화살표같은걸 담는거다
  그래서 원래 state값은 변경이 되지 않으면 재 렌더링이 안되는데, 화살표가 가리키는 array object값은 바뀌었지만 화살표가 바뀐게 아니기 때문에 화면 재렌더링이 안되는거임

- 자세한건 javascript reference data type

```jsx
// copy와 기존 글제목 state는 똑같다고 생각하기 때문에 (화살표가 똑같아서) state 변경을 안해줍니다.
let copy = 글제목;
copy[0] = "여자코트 추천";
글제목변경(copy);

//화살표가 달라지는 문법이라 이러면 잘됨
let copy = [...글제목];
copy[0] = "여자코트 추천";
글제목변경(copy);
```
