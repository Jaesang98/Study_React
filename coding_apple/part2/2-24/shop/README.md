## ⚡ part2-24 실시간 데이터가 중요하면 react-query

### 🔹 1. react-query

- 실시간 sns, 코인거래소 같이 실시간 데이터를 계속 가져와야할 떄 사용한다
- 틈만나면 알아서 ajax 재요청해줍니다
- 실패시 재시도 알아서 해줌
- ajax로 가져온 결과는 state 공유 필요없음

### 🔹 2. react-query 설치

```jsx
npm install react-query

//main,js
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}>
    ~~
</QueryClientProvider>

//app.jsx
import { useQuery } from "react-query";
function App(){
  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data })
  )

  return (
    <div>
      { result.isLoading && '로딩중' }
      { result.error && '에러남' }
      { result.data && result.data.name }
    </div>
  )
}
```
