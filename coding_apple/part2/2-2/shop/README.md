## 🔧 part2-2 이미지 넣는 법 & public 폴더 이용하기

### 🔹 1. 이미지 넣기

- 레이아웃을 복사 붙여넣기 식으로 편하게 개발가능한 라이브러리다

```jsx
// jsx상에서 이미지 적용
import 이미지 from "/경로";
style={{background : 'url(' + import로가져온이미지 + ')'}}

// css상에서 이미지 적용
background-image: url("/경로");

//public상에서 이미지 가져오기
/이미지경로
```

### 🔹 2. public 이미지

- 나중에 빌드할 떄 서브경로를 통해서 발행할 때 안먹을 수 있음

```jsx
//해결법
<img src={process.env.PUBLIC_URL + "/이미지"} />
```
