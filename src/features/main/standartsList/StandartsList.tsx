import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import Standart from './Standart'
import css from './StandartsList.module.scss'
import { setFilterStandart } from '../filters/filtersSlice'

const StandartsList = () => {

    const dispatch = useAppDispatch()

    const products = useAppSelector(state => state.products)
    const filterStandart = useAppSelector(state => state.filters.filterStandart)
    const standarts = Array.from(new Set(products.map(item => item.standart)))


    const addFilterStandart = (item: string) => {
        dispatch(setFilterStandart(item))
    }

    return (
        <div className={css.standarts}>
            {standarts.map(item =>
                <Standart
                    key={item}
                    name={item}
                    addFilterStandart={addFilterStandart}
                    filterStandart={filterStandart}
                />)}

        </div >
    )
}

export default StandartsList