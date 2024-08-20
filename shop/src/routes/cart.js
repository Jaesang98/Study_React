import { Table } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {addCount} from '../store'

function Cart() {
    let state = useSelector((state) => { return state });
    let dispatch = useDispatch();


    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                {
                    state.market.map((item, idx) => (
                        <tbody key={idx}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button onClick={()=> {dispatch(addCount(state.market[idx].id))}}>+</button>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}

export default Cart