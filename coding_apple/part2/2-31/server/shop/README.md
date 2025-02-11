## 🌐 part2-31 Node+Express 서버와 React 연동하려면

### 🔹 1. nodejs server만들기

```jsx
//설치
npm init -y
npm install express
npm install cors

//실행
node server.js


//server.js;
const express = require("express");
const path = require("path");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.use(express.json());
var cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "프로젝트/dist")));

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/프로젝트/dist/index.html"));
});

app.get(".product", function (요청, 응답) {
  응답.json({ name: "black shoes" });
});

app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/프로젝트/dist/index.html"));
});
```
