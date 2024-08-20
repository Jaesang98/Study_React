import '../App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Nav } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {addItem} from '../store'

function Detail(props) {
    let [sell, setSell] = useState(true);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setSell(false);
        }, 2000)
    }, [])

    let [num, setNum] = useState('')
    let [탭, 탭변경] = useState(0);

    // useEffect(() => {
    //     if (isNaN(num) == true) {
    //         alert('그러지마세요')
    //     }
    // }, [num])

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (x) {
        return x.id == id
    });
    return (
        <div className="App">
            <div className="container">
                {
                    sell == true ?
                        <div className='alert alert-warning'>
                            2초이내 구매시 할인
                        </div> :
                        ""
                }
                {/* <input onChange={(e) => { setNum(e.target.value) }} /> */}
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}원</p>
                        <button className="btn btn-danger" onClick={() => {
                            dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }));
                            navigate('/cart')
                        }}>주문하기</button>
                    </div>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item onClick={() => { 탭변경(0) }}>
                    <Nav.Link eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => { 탭변경(1) }}>
                    <Nav.Link eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => { 탭변경(2) }}>
                    <Nav.Link eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭}></TabContent>
        </div>
    );
}

function TabContent({ 탭 }) {
    if (탭 == 0) {
        return <div>내용0</div>
    }
    else if (탭 == 1) {
        return <div>내용1</div>
    }
    else {
        return <div>내용2</div>
    }
}


export default Detail;
