import '../App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import styled from 'styled-components'

function Detail(props) {
    let [sell, setSell] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSell(false);
        }, 2000)
    }, [])

    let [num, setNum] = useState('')

    useEffect(() => {
        if (isNaN(num) == true) {
            alert('그러지마세요')
        }
    }, [num])

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
                <input onChange={(e) => { setNum(e.target.value) }} />
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Detail;
