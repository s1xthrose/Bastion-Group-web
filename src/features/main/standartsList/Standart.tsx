import React from 'react'
import css from './Standart.module.scss'

interface ButtonStandart {
    name: string,
    filterStandart: string[]
    addFilterStandart: (item: string) => void
}

const Standart: React.FC<ButtonStandart> = ({ name, filterStandart, addFilterStandart }) => {

    return (
        <button
            className={filterStandart.includes(name)
                ? css.standart__button_active
                : ''}
            onClick={() => addFilterStandart(name)}
        >{name}</button>
    )
}

export default Standart