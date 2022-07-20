import { createSlice } from '@reduxjs/toolkit'


export type typesProductState = {
    id: string,
    name: string
}

const initialState: Array<typesProductState> = [
    {
        id: '01',
        name: 'Droduct'
    },
    {
        id: '02',
        name: 'Product'
    }
]

export const typesProductSlice = createSlice({
    name: 'typesProduct',
    initialState,
    reducers: {
        addType: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addType } = typesProductSlice.actions

export default typesProductSlice.reducer