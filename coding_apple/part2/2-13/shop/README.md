## 🏷️ part2-13 리액트에서 탭 UI 만들기

### 🔹 1. 조건식으로 화면에 show hide하는방법

```jsx
// 삼항 연산자
{tab == 0 : <div>내용0</div>; ? null}

// if문
<TabContent tab={tab}></TabContent>
function TabContent({tab}) {
  if (tab === 0) {
    return <div>내용0</div>;
  }
}

// array
<TabContent tab={tab}></TabContent>
function TabContent({tab}) {
    return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][tab]
}
```
