## part1-2 리액트 React 설치와 개발환경 셋팅

1. 개발환경 세팅

   - [nodejs설치](https://nodejs.org/ko)
   - [vscode설치](https://code.visualstudio.com/)

2. 프로젝트 생성

   1. npm create vite@latest 명령어 작성 후 프로젝트 명 및 선택사항들 선택

      - 허가되지 않은 스크립트 ~ 오류가 난다면 관리자로 실행 후
      - Set-ExecutionPolicy Unrestricted 이거했는데 잘 안되면 npm install -g npm 후 npm cache clean --force해보기

   2. npx create-react-app 썻을때는 npm start를 입력했었다
      (이게 리액트 신버전부터 업데이트가 안되고 있어서 사용을안한다)

3. 실행

   - npm run dev 입력

4. node.js

   - 원래 자바스크립트는 브라우저안에서만 실행이 가능하였지만 node.js로 인해실행이 가능해졌다
   - nodejs는 내컴퓨터 아무대서나 자바스크립트를실행시키게 도와주는 엔진
   - npm도 같이 설치됨
     => 자바스크립트 라이브러리 관리도구이다

5. vite

   - 빌드/번들링 툴
   - 소스코드 사이즈를 압축해준다
   - react vue등을 생 자바스크립트로 변환해준다
   - 미리보기가 빠르다

6. 폴더구조

   - node_modules 폴더 : 설치한 라이브러리의 소스코드 보관 폴더
   - public 폴더 : 데이터파일 이미지파일 등 쓸데없는 파일 보관소 (여기 넣으면 나중에 사이트 발행시 원본 보존가능)
   - package.json : 설치한 라이브러리 기록용 파일
   - 어쩌구.config.js : lint, vite 설정용 파일
   - index.html : 메인페이지인데 App.js 내용을 main.js에 넣고 그걸 index.html에 넣는 식으로 짜여져있음
