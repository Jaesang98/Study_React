## 📱 part2-28 PWA 셋팅해서 앱으로 발행하기 (모바일앱인척하기)

### 🔹 1. PWA

- 스마트폰, 태블릿 바탕화면에 여러분 웹사이트를 설치 가능합니다.
- 오프라인에서도 동작할 수 있습니다
- 설치 유도 비용이 매우 적습니다

### 🔹 2. 설치

```jsx
npx create-react-app 프로젝트명 --template cra-template-pwa
npm install web-vitals

main.js
serviceWorkerRegistration.unregister(); => serviceWorkerRegistration.register();
```
