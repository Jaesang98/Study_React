import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react';
import data from './data'

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <Card shoes={shoes}></Card>
        </div>
      </div>

    </div>
  );
}

function Card(props) {
  return (
    <>
      {
        props.shoes.map((item, idx) => (
          <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${idx+1}.jpg`} width="80%" />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;
