## part1-5 버튼에 기능개발을 해보자 & 리액트 state변경하는 법

1. warning 메시지

   - 변수를 사용하지 않음 등의 자잘한 오류가 생기는 경우 나타남
   - warning 메시지를 없애려면 제일 상단 /\* eslint-disable \*/를 작성

2. onClick

   - 클릭 이벤트
   - 함수를 호출 하는 경우 onClick= {함수}
   - 기능을 실행 하는 경우 onClick= {()=> {기능기능}}

3. state값 변경
   - let [a, b] = useState(1) 이 있을 때 state변경함수인 b를 통해서 바꿔야한다
   - 변경방법 : b(2)
