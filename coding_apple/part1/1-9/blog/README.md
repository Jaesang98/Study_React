## 🔄 part1-9 map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때

### 🔹 1. map

- array 자료 갯수만큼 함수안의 코드 실행
- 함수안의 파라미터는 array안의 자료

```jsx
{
    array.map (function(item, index) {
        return (
            <div key={index}>{item}</div>
        )
    }
}
```
