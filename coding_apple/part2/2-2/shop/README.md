## 🖼 part2-2 이미지 넣는 법 & public 폴더 이용하기

### 🔹 1. 이미지 적용 방법

- 다양한 방식으로 이미지를 적용할 수 있음

```jsx
// jsx상에서 이미지 적용
import 이미지 from "/경로";
<div style={{background : 'url(' + import로가져온이미지 + ')'}}></div>
<div style={{ background: `url(${이미지})` }}></div>


// css상에서 이미지 적용
background-image: url("/경로");
```

### 🔹 2. public 이미지

- 나중에 빌드할 떄 서브경로를 통해서 발행할 때 안먹을 수 있음

```jsx
//public상에서 이미지 가져오기
<img src="/이미지경로"/>

//해결법
<img src={process.env.PUBLIC_URL + "/이미지명"} />
```
