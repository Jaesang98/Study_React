import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
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
                      console.log(data);
                    })
                    .catch(() => {
                      console.log("실패함");
                    });
                }}
              >
                버튼
              </button>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
      </Routes>
    </div>
  );
}

function Card({ shoes }) {
  return (
    <div className="col-md-4">
      <img src={shoes.img} width="80%" />
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
