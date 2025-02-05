import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";

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
            </div>
          }
        />
        <Route path="/detail" element={<Detail></Detail>} />

        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>adwasd</div>}></Route>
        </Route>
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
