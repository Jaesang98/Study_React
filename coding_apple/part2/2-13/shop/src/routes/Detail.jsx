import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props) {
  // let [alert, setAlert] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  // }, []);

  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [탭, 탭변경] = useState(0);

  return (
    <div className="container">
      {/* {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null} */}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾은상품.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item
          onClick={() => {
            탭변경(0);
          }}
        >
          <Nav.Link eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            탭변경(1);
          }}
        >
          <Nav.Link eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            탭변경(2);
          }}
        >
          <Nav.Link eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}></TabContent>
    </div>
  );
}

function TabContent(props) {
  if (props.탭 === 0) {
    return <div>내용0</div>;
  }
  if (props.탭 === 1) {
    return <div>내용1</div>;
  }
  if (props.탭 === 2) {
    return <div>내용2</div>;
  }
}

export default Detail;
