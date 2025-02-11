import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, addCount } from "../store";
import { memo, useMemo, useState } from "react";

let Child = memo(function () {
  console.log("재렌더링됨");
  return <div>자식임</div>;
});

function 함수() {
  return 반복문10억번 돌린결과
}

function Cart() {
  let a = useSelector((state) => {
    return state;
  });
  // console.log(a);

  let state = useSelector((state) => state);
  // console.log(state);

  let dispatch = useDispatch();

  let [count, setCount] = useState(0);

  useMemo(() => {
    return 함수;
  }, []);
  return (
    <>
      <Child count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[index].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
