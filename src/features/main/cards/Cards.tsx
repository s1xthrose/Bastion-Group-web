import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { productsList } from '../../products/productsSlice'
import css from './Cards.module.scss'
import Card from './Card'

const Cards = () => {

    const products = useAppSelector(productsList)
    const filters = useAppSelector(state => state.filters)

    const selectedProducts = products
        .filter(el => el.price > filters.filterMinPrice)
        .filter(el => el.price < filters.filterMaxPrice)
        .filter(el => filters.filterType !== '' ? el.type === filters.filterType : el)
        .filter(el => filters.filterStandart.length > 0 ? filters.filterStandart.includes(el.standart) : el)


    return (
        <div className={css.cards}>
            {selectedProducts.length === 0
                ? <div className={css.cards__empty}>По такому запросу ничего не найдено :(</div>
                : selectedProducts.map(item =>
                    <Card
                        key={item.id}
                        product={item}
                    />
                )
            }
        </div>
    )
}

export default Cards