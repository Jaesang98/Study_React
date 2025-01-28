## part1-4 중요한 데이터는 변수말고 state에 담습니다

1. jsx문법

   - return 소괄호에는 대표 태그 하나로 묶여져 있어야한다
     => 두개의 태그를 같이 쓸 수 없다라는 뜻

2. useState

   - 값이 변경됬을 때 자동으로 html에 렌더링 되도록 하기위해 사용
   - state를 쓰던 html은 자동 재렌더링이 된다

3. useState 사용법
   1. useState import 해오기
   2. let [작명1, 작명2] = useState(초기데이터)
      => 작명1은 useState에 담겨있는 데이터, 작명2는 작명1의 데이터를 변경해주는 함수
