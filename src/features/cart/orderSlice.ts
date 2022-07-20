import { createSlice } from '@reduxjs/toolkit'


export type orderState = {
    productId: string,
    price: number,
    quantity: number
}

const initialState: Array<orderState> = [
    {
        productId: '01',
        price: 100,
        quantity: 2
    },
    {
        productId: '02',
        price: 200,
        quantity: 2
    }
]


export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let index = state.findIndex(el => el.productId === action.payload.productId)
            index < 0 ? state.push(action.payload) : state[index].quantity += action.payload.quantity
        },
        setQuantity: (state, action) => {
            let index = state.findIndex(el => el.productId === action.payload.productId)
            state[index] = action.payload
        },
        removeProduct: (state, action) => {
            let del = state.findIndex(el => el.productId === action.payload)
            state.splice(del, 1)
        },
        removeAllProduct: (state) => {
            state.splice(0, state.length)
        }
    }
})

export const { addProduct, setQuantity, removeProduct, removeAllProduct } = orderSlice.actions

export default orderSlice.reducer