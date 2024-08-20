import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim'
})

let market = createSlice({
    name: 'market',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        addCount(state, action) {
            let 번호 = state.findIndex((a) => { return a.id === action.payload })
            state[번호].count++
        },
        addItem(state, action) {
            state.push(action.payload);
            console.log(JSON.stringify(state))
        }
    }
})
export let {addCount, addItem} = market.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        market: market.reducer
    }
}) 