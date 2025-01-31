## 🛠️ part1-2 리액트 React 설치와 개발환경 셋팅
### 🔹 필수 설치 항목
#### 1️⃣ 개발환경 세팅
- [nodejs 설치하기](https://nodejs.org/ko)
- [vscode 설치하기](https://code.visualstudio.com/)
#### 2️⃣ 프로젝트 생성
```bash
#리액트 신버전부터 업데이트가 안되고 있어서 사용을 하지 않는다
npx create-react-app

npm create vite@latest
# 명령어 입력 후 나오는 프로젝트명 및 옵션 선택

# 오류 발생시
Set-ExecutionPolicy Unrestricted
npm install -g npm
npm cache clean --force
```
#### 3️⃣ 실행 방법
```bash
#npm create vite@latest인경우
npm run dev

#npx create-react-app인경우
npm start
```

### 🔹 주요 개념 설명
#### 1️⃣ node.js
- 원래 자바스크립트는 브라우저안에서만 실행이 가능하였지만 node.js로 인해실행이 가능해짐
- 즉 브라우저 외부에서 자바스크립트 실행 가능한 엔진이다
- npm(자바스크립트 라이브러리 관리도구) 포함

#### 2️⃣ vite
- 빌드/번들링 툴
- 소스코드 압축 및 변환
- react vue등의 프레임워크 등을 생 자바스크립트로 변환해준다
- 빠른 미리보기 지원

### 🔹 폴더 구조
- `node_modules`: 라이브러리 소스코드
- `public`: 데이터파일 이미지파일 등 쓸데없는 파일 보관소 (여기 넣으면 나중에 사이트 발행시 원본 보존가능)
- `package.json`: 라이브러리 기록
- `어쩌구.config.js`: lint, vite 설정 파일
- `index.html`: 메인페이지
