import React, { useState } from 'react'
import css from './Products.module.scss'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { productsList, addProduct, productsState } from './productsSlice'
import Product from '../../assets/img/Product.png'

const TypesProduct = () => {

    const products = useAppSelector(productsList)
    const types = useAppSelector(state => state.typesProduct)

    const dispatch = useAppDispatch()

    const [id, setId] = useState('')
    const [product, setProduct] = useState('')
    const [typeProduct, setTypeProduct] = useState('')
    const [price, setPrice] = useState('')
    const [standart, setStandart] = useState('')

    const [errorEmpty, setErrorEmpty] = useState(false)
    const [errorDoubleId, setErrorDoubleId] = useState(false)

    const check = () => {
        let checkId: boolean = products.map(item => item.id).includes(id)
        checkId ? setErrorDoubleId(true) :
            id === '' || product === '' || typeProduct === '' || price === '' || standart === ''
                ? setErrorEmpty(true)
                : add()
    }

    const add = () => {
        let newProduct: productsState = { id: id, name: product, type: typeProduct, price: +price, standart: standart, image: Product }
        dispatch(addProduct(newProduct))
        setId('')
        setProduct('')
        setTypeProduct('')
        setPrice('')
        setStandart('')
    }


    return (
        <div className={css.products}>
            <h1>Добавьте продукт</h1>
            <div className={css.products__inputs}>
                <input
                    type="text"
                    placeholder='ID...'
                    onChange={event => setId(event.target.value)}
                    onFocus={() => {
                        setErrorEmpty(false)
                        setErrorDoubleId(false)
                    }}
                    value={id}
                />
                <input
                    type="text"
                    placeholder='Наименование товара'
                    onChange={event => setProduct(event.target.value)}
                    onFocus={() => { setErrorEmpty(false) }}
                    value={product}
                />
                <select onChange={event => setTypeProduct(event.target.value)}>
                    <option disabled selected>- - -</option>
                    {
                        types.map(item => (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                        ))
                    }
                </select>
                <input
                    type="number"
                    placeholder='Цена'
                    onChange={event => setPrice(event.target.value)}
                    onFocus={() => { setErrorEmpty(false) }}
                    value={price}
                />                <input
                    type="text"
                    placeholder='ГОСТ'
                    onChange={event => setStandart(event.target.value)}
                    onFocus={() => { setErrorEmpty(false) }}
                    value={standart}
                />
            </div>
            <div className={css.products__errors}>
                {errorEmpty ? <p className={css.products__error}>Не все поля заполнены</p> : ''}
                {errorDoubleId ? <p className={css.products__error}>Такой Id уже существует</p> : ''}
            </div>
            <button
                onClick={() => check()}
            >Добавить товар</button>
        </div>
    )
}

export default TypesProduct