import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react';
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail';
import Cart from './routes/cart'
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}} >Home</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/Detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                <Card shoes={shoes}></Card>
              </div>
            </div>

            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과) => {
                let copy = [...shoes, ...결과.data];
                setShoes(copy)
              })
              .catch((err) => {
                console.log(err)
              })
            }}>추가</button>
          </>
        }></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
    </div>
  )
}

function Card(props) {
  return (
    <>
      {
        props.shoes.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <img src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`} width="80%" />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;
