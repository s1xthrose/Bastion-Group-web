import { createSlice } from '@reduxjs/toolkit'


export type filterstState = {
    filterType: string,
    filterMinPrice: number,
    filterMaxPrice: number,
    filterStandart: string[]
}

const initialState: filterstState =
{
    filterType: '',
    filterMinPrice: 0,
    filterMaxPrice: Infinity,
    filterStandart: []
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterMinPrice: (state, action) => {
            state.filterMinPrice = action.payload
        },
        setFilterMaxPrice: (state, action) => {
            state.filterMaxPrice = action.payload
        },
        setFilterType: (state, action) => {
            state.filterType = action.payload
        },
        setFilterStandart: (state, action) => {
            let index = state.filterStandart.findIndex(el => el === action.payload)
            index < 0 ? state.filterStandart.push(action.payload) : state.filterStandart.splice(index, 1)
        }
    }
})

export const { setFilterMinPrice, setFilterMaxPrice, setFilterType, setFilterStandart } = filtersSlice.actions

export default filtersSlice.reducer