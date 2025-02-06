## 🎭 part2-14 멋있게 컴포넌트 전환 애니메이션 주는 법 (transition)

### 🔹 1. automatic batching 기능

- state 변경함수들이 연달아서 여러개 처리되어야한다면 state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링된다
