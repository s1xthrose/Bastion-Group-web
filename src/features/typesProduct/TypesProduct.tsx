import React, { useState } from 'react'
import css from './TypesProduct.module.scss'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { addType, typesProductState } from './typesProductSlice'

const TypesProduct = () => {

    const typesProduct = useAppSelector(state => state.typesProduct);
    const dispatch = useAppDispatch()

    const [id, setId] = useState('')
    const [typeProduct, setTypeProduct] = useState('')
    const [errorId, setErrorId] = useState(false)
    const [errorDoubleId, setErrorDoubleId] = useState(false)
    const [errorType, setErrorType] = useState(false)

    const check = () => {
        let checkId: boolean = typesProduct.map(item => item.id).includes(id)
        checkId ? setErrorDoubleId(true) :
            id === '' ? setErrorId(true) :
                typeProduct === '' ? setErrorType(true) : add()
    }

    const add = () => {
        let newType: typesProductState = { id: id, name: typeProduct }
        dispatch(addType(newType))
        setId('')
        setTypeProduct('')
    }


    return (
        <div className={css.typesProduct}>
            <h1>Добавьте тип продукта</h1>
            <div className={css.typesProduct__inputs}>
                <input
                    type="text"
                    placeholder='ID...'
                    onChange={event => setId(event.target.value)}
                    onFocus={() => {
                        setErrorId(false)
                        setErrorDoubleId(false)
                    }}
                    value={id}
                />
                <input
                    type="text"
                    placeholder='Тип продукта...'
                    onChange={event => setTypeProduct(event.target.value)}
                    onFocus={() => setErrorType(false)}
                    value={typeProduct}
                />
            </div>
            <div className={css.typesProduct__errors}>
                {errorId ? <p className={css.typesProduct__error}>Введите Id</p> : ''}
                {errorDoubleId ? <p className={css.typesProduct__error}>Такой Id уже существует</p> : ''}
                {errorType ? <p className={css.typesProduct__error}>Введите тип продукта</p> : ''}
            </div>
            <button
                onClick={() => check()}
            >Добавить</button>
        </div>
    )
}

export default TypesProduct