import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import Product from '../../assets/img/Product.png'


export type productsState = {
    id: string,
    name: string,
    type: string,
    price: number,
    standart: string,
    image: any
}

const initialState: Array<productsState> = [
    {
        id: '01',
        name: 'Droduct 01',
        type: 'Droduct',
        price: 100,
        standart: 'ГОСТ',
        image: Product
    },
    {
        id: '02',
        name: 'Product 01',
        type: 'Product',
        price: 200,
        standart: 'СНИП',
        image: Product
    },
    {
        id: '03',
        name: 'Croduct 01',
        type: 'Croduct',
        price: 2000,
        standart: 'ГОСТ',
        image: Product
    },
    {
        id: '04',
        name: 'Croduct 02',
        type: 'Croduct',
        price: 580,
        standart: 'ГОСТ',
        image: Product
    },
    {
        id: '05',
        name: 'Droduct 02',
        type: 'Droduct',
        price: 5000,
        standart: 'ТОСТ',
        image: Product
    }
]

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addProduct } = productsSlice.actions

export const productsList = (state: RootState) => state.products

export default productsSlice.reducer