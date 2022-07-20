import React, { useState } from 'react'
import css from './Filters.module.scss'
import Options from '../../../assets/icons/Options.png'
import Help from '../../../assets/icons/Help.png'
import Shevron_down from '../../../assets/icons/Shevron_down.png'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setFilterMinPrice, setFilterMaxPrice, setFilterType } from './filtersSlice'


const Filters = () => {

    const dispatch = useAppDispatch()
    const typesProduct = useAppSelector(state => state.typesProduct)
    const filters = useAppSelector(state => state.filters)
    const prices = useAppSelector(state => state.products.map(item => item.price))

    const minPrice = Number(prices.sort((a, b) => b - a).pop())
    const maxPrice = Number(prices.sort((a, b) => a - b).pop())

    const [minRange, setMinRange] = useState(minPrice)
    const [maxRange, setMaxRange] = useState(maxPrice)

    const addMinRange = (price: number) => {
        let gap = 100
        if (maxRange - price <= gap) {
            dispatch(setFilterMinPrice(maxRange - gap))
            setMinRange(maxRange - gap)
        } else {
            dispatch(setFilterMinPrice(price))
            setMinRange(price)
        }
    }

    const addMaxRange = (price: number) => {
        let gap = 100
        if (price - minRange <= gap) {
            dispatch(setFilterMaxPrice(minRange + gap))
            setMaxRange(minRange + gap)
        } else {
            dispatch(setFilterMaxPrice(price))
            setMaxRange(price)
        }
    }

    let fill = `linear-gradient(to right,
        #ffffff ${minRange / maxPrice * 100}%,
        #c93e33 ${minRange / maxPrice * 100}%,
        #c93e33 ${maxRange / maxPrice * 100}%,
        #ffffff ${maxRange / maxPrice * 100}%)`;


    return (
        <div className={css.filters}>
            <div className={css.filters__title}>
                <img src={Options} alt="" />
                <p>Фильтры</p>
            </div>
            <div className={css.filters__price}>
                <div className={css.filters__titles}>
                    <p>Цена, руб.</p>
                </div>
                <div className={css.filters__priceInputs}>
                    <div className={css.filters__priceInput}>
                        <p>от</p>
                        <input
                            type="number"
                            placeholder={minPrice?.toLocaleString()}
                            value={minRange}
                            onChange={event => addMinRange(+event.target.value)}
                        />
                    </div>
                    <div className={css.filters__priceInput}>
                        <p>до</p>
                        <input
                            type="number"
                            placeholder={maxPrice?.toLocaleString()}
                            value={maxRange}
                            onChange={event => addMaxRange(+event.target.value)} />
                    </div>
                </div>
                <div className={css.doubleSlider}>
                    <div
                        className={css.doubleSlider__track}
                        style={{ background: fill }}
                    ></div>
                    <input
                        className={css.doubleSlider__input}
                        type='range'
                        min={0}
                        max={maxPrice}
                        value={minRange}
                        onChange={event => addMinRange(+event.target.value)} />
                    <input
                        className={css.doubleSlider__input}
                        type='range'
                        min={0}
                        max={maxPrice}
                        value={maxRange}
                        onChange={event => addMaxRange(+event.target.value)} />
                </div>
            </div>
            <div className={css.filters__type}>
                <div className={css.filters__typeHeader}>
                    <p className={css.filters__titles}>Тип продукта</p>
                    <img src={Help} alt="" />
                    <div className={css.filters__typeImg}>
                        <img src={Shevron_down} alt="" />
                    </div>
                </div>
                <div className={css.filters__typeContent}>
                    <button
                        className={css.filters__typeItem}
                        onClick={() => dispatch(setFilterType(''))}
                    >Все продукты</button>
                    {typesProduct.map(item =>
                        <button
                            key={item.id}
                            className={
                                item.name === filters.filterType
                                    ? css.filters__typeItem + ' ' + css.selected
                                    : css.filters__typeItem}
                            onClick={() => dispatch(setFilterType(item.name))}
                        >{item.name}</button>)}
                </div>
            </div>
        </div >
    )
}

export default Filters