## 💅 part2-8 styled-components 쓰면 CSS 파일 없어도 되는데

### 🔹 1. styled-components

#### ✅ 설치 및 사용

```jsx
//설치
npm install styled-components

//임포트
import styled from 'styled-components'

//적용예시
let Button = styled.button `
  background : yellow `
<Button></Button>

//적용예시2
let Button = styled.button `
  background : ${props => props.bg} `
<Button bg="blue"></Button>
```

### 🔹 2. css파일이 전염

- `컴포넌트.module.css` 파일 만들면 전염안됨
