## ⚠️ part2-29 state 변경함수 사용할 때 주의점 : async

- state변경함수나 뭐 서버통신하고 난 뒤에 다음 줄의 값이 수정되게 하고싶은데
  시점차이가 생길 수 있음 그떄는 그냥 useEffect를 쓰자
