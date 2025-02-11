import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import data from "./data";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  let result = useQuery("작명", () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((a) => {
        return a.data;
      });
  });

  console.log(result.data);

  return (
    <div>
      <Navbar bg="" data-bs-theme="">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#features"
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              href="#features"
              onClick={() => {
                navigate("/cart");
              }}
            >
              cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading ? "로딩중" : result.data.name}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((item) => (
                    <>
                      <Card shoes={item}></Card>
                    </>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((data) => {
                      let copy = [...shoes, ...data.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패함");
                    });
                }}
              >
                더보기
              </button>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>
  );
}

function Card({ shoes }) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${shoes.id + 1}.jpg`}
        width="80%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      ㅎㅇㅎㅇ
      <Outlet></Outlet>
    </div>
  );
}

export default App;
