## part 1-1 React 배우기 전에 쓰는 이유부터 알아야

    1. 리액트를 쓰는 이유
    	1) single page Application을 만들 때 쓴다
    		=> 새로고침 없이 앱처럼 부드럽게 동작하는 html페이지를 만들 때 사용
    			**물론 생 자바스크립로도 할 수 있지만 코드가 길어지기 때문에 react를 사용하는거임**

    	2) html 재사용이 편리함

    	3) 같은 문법으로 앱 개발 가능 (React Native와 유사)



## part 1-2 리액트 React 설치와 개발환경 셋팅

    1. 개발세팅
    	1) node js, vscode설치
    	2) 폴더 만든 후 파워쉘 창 열어서 npx create-react-app blog (react create app 라이브러리임)
    		=> 허가되지 않은 스크립트 ~ 오류가 난다면 관리자로 실행 후
    			- Set-ExecutionPolicy Unrestricted
    			- 이거했는데 잘 안되면 npm install -g npm 후 npm cache clean --force해보기
    			- 그래도 안되면 인생망함

    2. npm
    	- 그냥 라이브러리를 다 모아놓은 플랫폼 같은거임
    	- node.js 설치하면 딸려옴

## part 1-3 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개

    1. jsx
    	- js파일에서 쓰는 html대용품
    	- 리액트는 jsx를 사용한다

    2. 문법
    	1) className을 써야하며 다른 css파일을 사용하고 싶은 경우 import해와야함
    	2) {} 데이터는 중괄호안에 써야함
    		=> 웬만한 곳은 {}를 쓸수 있음, 이런걸 데이터 바인딩이라고 한다!
    	3) jsx상에서 스타일을 수정할 때 {{color : 'red', ~ }} 이런식으로 써야함
    		=> -기호는 쓸 수 없음



## part 1-4 중요한 데이터는 변수말고 state에 담습니다

    1. 문법
    	- return 소괄호에는 대표 태그 하나로 묶여져 있어야한다
    		=> 두개의 태그를 같이 쓸 수 없다라는 뜻

    2. useState
    	값이 변경됬을 때 자동으로 html에 렌더링 되도록 하기위해 사용
    	1) useState import 해오기
    	2) useState에 보관할 자료 적기
    	3) let [작명1, 작명2] 으로 변수 선언
    		=> 작명1은 state에 보관했던 자료, 작명2는 state를 변경해주는 함수



## part 1-5 버튼에 기능개발을 해보자 & 리액트 state변경하는 법

    1. warning 메시지
    	=> 뭐 만들고 안썻다 이런것들을 알려주는건데 보기싫으면 /* eslint-disable */ 이거쓰면됨

    2. 클릭 이벤트
    	- onClick= {}를 사용한다
    	- 함수를 호출 하는 경우 onClick= {함수}
    	- 기능을 실행 하는 경우 onClick= {()=> {기능기능}}

    3. state변경
    	- let [작명1, 작명2] = useState("0");
    		작명2("1")
    		=> state변경함수(새로운state) 이렇게 작성을 해야 바뀜


## part 1-6 array, object state 변경하는 법

    1. array object수정
    	1) 원본을 보존하는게 좋음
    		=> let copy = [...데이터] 이렇게 해야 카피본이 만들어짐
    			배열이나 오브젝트는 변수를 지정하면 화살표가 생김
    			그래서 그 상태에서 뭔 변경해도 배열이 바뀐거지 화살표가 바뀐게아니라
    			기존 state에서 배열을 변경하고 넣어도 값이 바뀌지 않는거임
    			... 이걸써야 화살표가 달라짐


## part 1-7 Component : 많은 div들을 한 단어로 줄이고 싶으면

    1. 컴포넌트 만드는법
    	1) function을 만든다
    	2) return()안에 html을 담는다
    	3) <함수명></함수명> or <함수명/>을 쓴다

    2. 컴포넌트 언제 쓰는지
    	1) 반복적인 html 축약
    	2) 큰 페이지들
    	3) 자주 변경되는 것들


## part 1-8 리액트 환경에서 동적인 UI 만드는 법 (모달창만들기)

    1. 동적 UI만드는 스텝
    	1) 디자인 완성
    	2) 현재 상태를 state에 저장
    	3) state에 따라 UI가 어떻게 보일지 작성

    2. 요소 show hide처리
    	{
    		조건식 ? 요소 : null
    	}
    	=> 이렇게 요소를 show hide시킬 수 있다

    ** useState는 작명, set작명 이렇게 적는게 관습이다 **

## part 1-9 map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때

    1. map
    	{
    		array.map (function(item, index) {
    			return (
    				요소
    			)
    		}
    	}
    	=> 이런 형태



## part 1-10 자식이 부모의 state 가져다쓰고 싶을 때는 props

    1. props사용법
    	1) <자식컴포넌트 작명={state}>
    	2) props 파라미터 추가 후 props.작명으로 사용
    		**부모에서 자식에게만 전송이 가능 (패륜 불륜안됨)**



## part 1-11 props를 응용한 상세페이지 만들기

    1. 상세에 데이터를 넘겨줄 때
    	- 하나의 오브젝트 or 하나의 배열만 보내거나
    	- index도 같이 보내야함
    		=> 뭐가 좋을지 상황에 맞춰서 사용하자

    	- 자식과 부모가 같이쓰는 state라면 부모에 올려놓고 자식이 props로 받아쓰는게 좋다



## part 1-12 input 1 : 사용자가 입력한 글 다루기

    1. input
    	- 값을 가져올 때는 onChange={(e) => {e.target.value}} 이렇게 가져온다

    2. 이벤트 버블링
    	- 이벤트가 상위요소로 퍼지는 현상
    	- e.stopPropagation 사용하면 안퍼짐

    ** state변경 시차가 있음, 그래서 변경 후 다음에 바로 콘솔찍으면 변경안된게 출력됨 **

## part 1-13 input 다루기 2 : 블로그 글발행 기능 만들기

    1. 배열에서 삭제
    	- splice (index, 1)

    2. 배열에서 맨 앞에 추가
    	- 변수.unshift(입력값)



## part 1-14 class를 이용한 옛날 React 문법

    오늘의 결론은 :
    컴포넌트 만들 일이 있으면 class는 복잡하니까 function 씁시다.
    근데 개발하다보면 예전 리액트프로젝트같은거 봐야하는 경우가 있습니다.
    그럴 때 class 컴포넌트 나올텐데 당황하면 뉴비티가 나기 때문에
    고수인 척 하고 싶으면 참고로 알아둡시다.

## part 1-15 만든 리액트 사이트 build & Github Pages로 배포해보기

    1. 빌드하기
    	1) npm run build
    	2) 깃허브에서 프로젝트명..github.io 로 해줘야함
    		=> 이제는 pages 들어가서 source를 main으로 바꿔주자
    	3) build안에 있는거 올림


    2. 첫 페이지를 빠르게 동작시키려면
    	lazy 함수 : https://reactjs.org/docs/code-splitting.html#route-based-code-splitting

---

## part 2-1 새로운 프로젝트 생성 & Bootstrap 사용하기

    1. 리액트 부트스트랩 설치
    	1) npm install react-bootstrap bootstrap
    	2) index.html 에 글로벌로하기
    		<link
    		  rel="stylesheet"
    		  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    		  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    		  crossorigin="anonymous"
    		/>

    	3) import {Button} from 'react-bootstrap'
    		=> 이런식으로 불러와야함

    	** className넣어서 커스터마이징해도되니까 걱정 ㄴㄴ**



## part 2-2 이미지 넣는 법 & public 폴더 이용하기

    1. jsx에서 이미지 넣기
    	1) import로 이미지를 가져옴
    	2) style={{background : 'url(' + import로가져온이미지 + ')'}}

    	or

    	1) public폴더에 이미지를 넣음
    	2) /이미지이름 이렇게 적으면됨
    		=> 나중에 빌드할 떄 서브경로를 통해서 발행할 때 안먹을 수 있음;;
    			** 그래서 img같은 경우에는 <img src={process.env.PUBLIC_URL + '/logo192.png'} /> 이렇게 해주는게좋음

## part 2-3 코드 길어지면 import export 하면 됩니다

    1. 다른 파일의 정보를 사용하는법
    	1) 사용될 파일 export default 하기
    		=> 여러개 쓸거면 export{a,b,c}
    	2) 사용할 페이지에서 import하기
    		=> 여거래 가져올거면 import{a,b,c}
    	3) 사용



## part 2-4 저번시간 숙제 해설 (Card 컴포넌트 만들기)

    1. 내가 한 실수
    	return () 안에 대표 태그하나 써야됌;;;

## part 2-5 리액트 라우터 1 : 셋팅이랑 기본 라우팅

    1. 페이지 나누는법
    	1) 컴포넌트를 만들어 상세페이지 내용을 만든다
    	2) 현재 기본 url에 /detail 이런식으로 접속 시 그 페이지가 보이게한다
    	or
    	react router dom 설치

    2. router
    	1) npm install react-router-dom@6 설치
    	2) index.js
    		import { BrowserRouter } from 'react-router-dom'; 선언 후
    		APP컴포넌트를 BrowserRouter로 감싸면됨

    	3) Routes Route Link를 임포트해오기
    	4) Routes>
    		<Route path="/detail" element={<div>상세페이지</div>}>
    		</Route>
    	  </Routes>
    		=> 이렇게 Route를 Routes로 감싸면됨

    3. Link
    	1) to="/경로"
    		=> 이렇게 하면 하이퍼링크같은 형식으로 이동을한다



## part 2-6 리액트 라우터 2 : navigate, nested routes, outlet

    1. useNavigate
    	- 이벤트를 발생시켜 페이지 이동을 할 때 사용
    		1) let navigate = useNavigate(); 선언
    		2) onClick(() => { navigate('/경로')})


    2. 404페이지
    	Route맨 마지막에  <Route path="*" element={<div>404</div>}></Route> 이거 적으면 됨


    3. nested routes
    	- 라우트 태그안에 태그가 들어간것
    		1) <Route>태그안에 Route태그 쓰기
    			<Route path="/detail">
    				<Route part="member">

    				</Route>
    			</Route>
    			=> 이렇게 하면 경로 안에 경로 즉 /detail/member 이런식으로 가능

    		or
    			<Route part="/detail/member"></Route>

    		2) detail 태그가 들어갈 곳에
    			<Outlet></Outlet> 이거를 쓰면 됨
    				이거는 detail에서 member를 어디에 보여줄지를 나타내는거임

    	=> 대신에 이렇게 하면 두개의 태그가 다 보임;;



## part 2-7 리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기

    1. /detail/123
    	=> 이런식으로 url를 호출 하려면 /detail/:id 이렇게 적어야함

    2. useParams()
    	- 현재 url들의 파라미터 정보들을 받음



## part 2-8 styled-components 쓰면 CSS 파일 없어도 되는데

    1. styled-components 적용
    	1) npm install styled-components
    	2) 컴포넌트에 import styled from 'styled-components'
    	3) let Button = styled.button `
    		background : yellow `
    		<Button></Button>

    		=> 이런식으로 써도됨

    2. css파일이 전염되는것을 막으려면
    	컴포넌트.module.css 이렇게 파일을 만들어야한다


    **잘 안쓸듯**

## part 2-9 Lifecycle과 useEffect 1

    1. useEffect
    	- mount, update시 코드를 실행해준다
    	- 아마 개발을 할 때는 2번 호출 될건데 그건 디버깅을 위해서 그런거임
    		실제 배포하면 그런일 없음
    			=> 만약 그런게 싫다면 index.js에 가서 React.StrictMode를 없애면됨


    2. 사용하는 이유
    	- html렌더링 후에 동작을 한다

    3. 언제 사용
    	- 어려운 연산 or 오래걸리는 연산
    	- 서버에서 데이터를 가져올 때
    	- 타이머 장착했을 때



## part 2-10 Lifecycle과 useEffect 2

    1. useEffect 동작
    	- 기본적으로 mount update에 실행이 됨
    	- 특정값이 변경됬을 때만 실행이 되게 하려면
    		useEffect(()=> {},[특정값])
    		=> 이렇게 사용하면 된다

    	- []만 넣으면 처음 mount됬을 때만 1회실행됨
    	- useEffect가 실행되기전에 코드를 실행하려면
    		return() => {
    			코드
    		}
    		=> 이렇게 useEffect안에다가 저걸 추가하면된다
    			이런건 대부분 기존 데이터를 전부 깔끔하게 지우고 새로시작할 때 사용한다
    			타이머같은 경우에는 변수에 타이머를 저장한 후 return 에 clearTimeout(변수)
    			이렇게 작성해도된다



## part 2-11 리액트에서 서버와 통신하려면 ajax 1

    1. ajax
    	1) npm install axios
    	2) import 하기
    	3) axios.get('url쓰기').then((결과)=>{
    		console.log(결과.data)
    	  })

## part 2-12 리액트에서 서버와 통신하려면 ajax 2 : post, fetch

    1. post
    	서버로 데이터 전송하는요청

    2. 여러ajax를 요청하는 방법
    	Promise.all([a,b]).then(()=> {})



## part 2-13 리액트에서 탭 UI 만들기

    1. 조건식으로 화면에 show hide하는방법
    	1) 삼항연산자
    	2) 컴포넌트 만든 후 그곳에 if문 적기
    		=> 요소를 return꼭해야함
    	3) 요소를 배열에 넣고 인덱스를 프롭스로 받아 보여줌



## part 2-14 멋있게 컴포넌트 전환 애니메이션 주는 법 (transition)

    1. transition 이거사용하면될듯

## part 2-15 props 싫으면 Context API 써도 됩니다

    1. Context API
    	- props 전송없이 state공유가능
    	- 잘안쓰는데 이유는
    		1. state 변경시 쓸데없는 컴포넌트까지 전부 재렌더링이 되고
    		2. useContext() 를 쓰고 있는 컴포넌트는 나중에 다른 파일에서 재사용할 때 Context를 import 하는게 귀찮아질 수 있습니다.



## part 2-15 장바구니 페이지 만들기 & Redux 1 : Redux Toolkit 설치

    1. Redux
    	컴포넌트들이 props없이 state 공유가능

    2. 설치
    	1) react버전이 18.1.0 이상인지 확인
    	2) npm install @reduxjs/toolkit@1.8.1 react-redux
    	3) store.js 파일 만들기
    		import { configureStore } from '@reduxjs/toolkit'

    		export default configureStore({
    		  reducer: { }
    		})

    	4. index.js 수정
    		import { Provider } from "react-redux";
    		import store from './store.js'

    		const root = ReactDOM.createRoot(document.getElementById('root'));
    		root.render(
    		  <React.StrictMode>
    			<Provider store={store}>
    			  <BrowserRouter>
    				<App />
    			  </BrowserRouter>
    			</Provider>
    		  </React.StrictMode>
    		);



## part 2-16 Redux 2 : store에 state 보관하고 쓰는 법

    1. redux
    	1) store.js파일 수정
    	import { configureStore, createSlice } from '@reduxjs/toolkit'

    	let user = createSlice({
    	  name : 'user',
    	  initialState : 'kim'
    	})

    	export default configureStore({
    	  reducer: {
    		user : user.reducer
    	  }
    	})
    	=>  name : 'state이름', initialState : 'state값'
    		{ 작명 : createSlice만든거.reducer }

    	2) 사용하기
    		- import { useSelector } from 'react-redux';
    		- let a = useSelector((state) => { return state });



## part 2-17 Redux 3 : store의 state 변경하는 법\

localStorage로 만드는 최근 본 상품 기능 1 1. state변경 1) reducers : {
함수(state) {
return 변경
}
} 2) export let {함수} = state의네임.action
=> ex) user.action 3) import { useDispatch, useSelector } from "react-redux"
import { changeName } from "./../store.js"
let dispacth = useDispatch();
dispacth(함수())
=> 이렇게 귀찮게 store에 있는 데이터를 가져와야한다

## part 2-18 Redux 4 : state가 object/array일 경우 변경하는 법

    1. redux 파라미터
    	1) 함수(state, action) 이렇게 적었을 경우
    		value는 컴포넌트에서 store.js에게 보낸 파라미터이고
    		사용은 action.payload 이렇게 가져와서 쓸 수 있다



## part 2-19 Redux 5 : 장바구니 기능 만들기 숙제 & 응용문제

    숙제임

## part 2-20 리액트에서 자주쓰는 if문 작성패턴 5개

    1. 컴포넌트 안에서 쓰는 if/else
    	function Component() {
    	  if ( true ) {
    		return <p>참이면 보여줄 HTML</p>;
    	  } else {
    		return null;
    	  }
    	}

    2. JSX안에서 쓰는 삼항연산자
    	function Component() {
    	  return (
    		<div>
    		  {
    			1 === 1
    			? <p>참이면 보여줄 HTML</p>
    			: null
    		  }
    		</div>
    	  )
    	}

    3. && 연산자로 if 역할 대신하기
    	function Component() {
    	  return (
    		<div>
    		  {
    			1 === 1
    			? <p>참이면 보여줄 HTML</p>
    			: null
    		  }
    		</div>
    	  )
    	}

    	function Component() {
    	  return (
    		<div>
    		  { 1 === 1 && <p>참이면 보여줄 HTML</p> }
    		</div>
    	  )
    	}

    4. switch / case 조건문
    	function Component2(){
    	  var user = 'seller';
    	  if (user === 'seller'){
    		return <h4>판매자 로그인</h4>
    	  } else if (user === 'customer'){
    		return <h4>구매자 로그인</h4>
    	  } else {
    		return <h4>그냥 로그인</h4>
    	  }
    	}

    5. object/array 자료형 응용
    	function Component() {
    	  var 현재상태 = 'info';
    	  return (
    		<div>
    		  {
    			{
    			   info : <p>상품정보</p>,
    			   shipping : <p>배송관련</p>,
    			   refund : <p>환불약관</p>
    			}[현재상태]
    		  }

    		</div>
    	  )
    	}

## part 2-21 localStorage로 만드는 최근 본 상품 기능 1

    1. localStorage
    	- 사이트를 꺼도 계속해서 남아있음

    	- 	사용법
    		localStorage.setItem('데이터이름', '데이터');
    		localStorage.getItem('데이터이름');
    		localStorage.removeItem('데이터이름')
    		localStorage.setItem('obj', JSON.stringify({name:'kim'}) );
    		var a = localStorage.getItem('obj');
    		var b = JSON.parse(a)

    2. sessionStorage
    	- 브라우저 끄면 날라감
    	- 사용법 로컬스토리지랑 같음



## part 2-22 localStorage로 만드는 최근 본 상품 기능 2

    1. 숙제임

## part 2-23 실시간 데이터가 중요하면 react-query

    1. react-query
    	1) npm install react-query@3
    	2) index.js
    		import { QueryClient, QueryClientProvider } from "react-query"
    		const queryClient = new QueryClient();
    		<QueryClientProvider client={queryClient}>
    			~~
    		</QueryClientProvider>

    2. 사용 이유
    	몇초마다 자동으로 데이터 다시 가져오게 하려면?

요청실패시 몇초 간격으로 재시도?
다음 페이지 미리가져오기?
ajax 성공/실패시 각각 다른 html을 보여주려면? 3. 사용법
let result = useQuery('작명', () =>
axios.get('https://codingapple1.github.io/userdata.json')
.then((a) => { return a.data })
)
  
 { result.isLoading && '로딩중' }
{ result.error && '에러남' }
{ result.data && result.data.name }

## part 2-24 성능개선 1 : 개발자도구 & lazy import

    1. React DevTools
    	- state, props 이런거 조회가능

    2. Profiler 성능측정
    	- 녹화해서 이벤트 중 느린거나 기능저하시키는것 확인가능

    3. Redux DevTools
    	- Redux store에 있던 state를 전부 확인가능

    4. lazy import
    	- 필요할때만 임포트 한것을 가져옴
    	  그래서 첫 페이지 로딩속도를 향상시킬 수 있습니다.

    	 - const Cart = lazy( () => import('./routes/Cart.js') )

    	 - <Suspense fallback={ <div>로딩중임</div> }>
    		  <Detail shoes={shoes} />
    		</Suspense>



## part 2-25 성능개선 2 : 재렌더링 막는 memo, useMemo

    1. memo
    	function Child(){
    	  console.log('재렌더링됨')
    	  return <div>자식임</div>
    	}

    	function Cart(){

    	  let [count, setCount] = useState(0)

    	  return (
    		<Child />
    		<button onClick={()=>{ setCount(count+1) }}> + </button>
    	  )
    	}
    	=> <Child /> 여기에 프롭스를 전달하는 것 아닌이상 재 렌더링을 막아줌
    	** 잘 안쓴다함 **


    2. useMemo
    	import {useMemo, useState} from 'react'

    	function 함수(){
    	  return 반복문10억번돌린결과
    	}

    	function Cart(){

    	  let result = useMemo(()=>{ return 함수() }, [])

    	  return (
    		<Child />
    		<button onClick={()=>{ setCount(count+1) }}> + </button>
    	  )
    	}
    	=> 컴포넌트 로드시 1회만 실행
    		dependency도 넣을 수 있어서
    		특정 state, props가 변할 때만 실행할 수도 있습



## part 2-26 성능개선 3 : useTransition, useDeferredValue

    1. useTransition
    	- 타이핑같이 즉각 반응해야하는걸 우선적으로 처리해줌

    2. useDeferredValue
    	- startTransition() 이거랑 용도가 똑같으나  state 아니면 변수하나를 집어넣을 수 있게 되어있어
    		변수에 변동사항이 생기면 그걸 늦게 처리한다



## part 2-27 PWA 셋팅해서 앱으로 발행하기 (모바일앱인척하기)

    1. 설치
    	1)  npx create-react-app 프로젝트명 --template cra-template-pwa
    	2) index.js에서
    		serviceWorkerRegistration.unregister(); => serviceWorkerRegistration.register();



## part 2-28 state 변경함수 사용할 때 주의점 : async

    state변경함수나 뭐 서버통신하고 난 뒤에 다음 줄의 값이 수정되게 하고싶은데
    시점차이가 생길 수 있음 그떄는 그냥 useEffect를 쓰자

## part 2-29 custom hook으로 코드 재사용하기

    1. custom hook
    	- usehook을 쓸 때는 커스텀훅도 use를 붙이는게 좋다
    	- 값을 가져오려면 return [a,b] 이렇게 쓴다



## part 2-30 Node+Express 서버와 React 연동하려면

## part 2-31 React 강의 나가는 말
