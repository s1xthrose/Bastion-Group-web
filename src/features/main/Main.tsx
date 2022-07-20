import React, { useState } from 'react'
import css from './Main.module.scss'
import Arrow from '../../assets/icons/Arrow.png'
import Select from '../../assets/icons/Select.png'
import Apps from '../../assets/icons/Apps.png'
import List from '../../assets/icons/List.png'
import Apps_red from '../../assets/icons/Apps_red.png'
import Shevron_up from '../../assets/icons/Shevron_up.png'
import StandartsList from './standartsList/StandartsList'
import Filters from './filters/Filters'
import Shevron_down from '../../assets/icons/Shevron_down.png'
import Cards from './cards/Cards'

const Main = () => {

    return (
        <div className={css.main}>
            <div className={css.main__top}>
                <div className={css.main__topPath}>
                    <p>Главная /</p>
                    <p>Интернет-магазин /</p>
                    <p>Опоры трубопроводов</p>
                </div>
                <div className={css.main__topLine}>
                    <div className={css.main__topLineLeft}>
                        <button>
                            <img src={Arrow} alt="" />
                        </button>
                        <p>Опоры трубопроводов</p>
                    </div>
                    <div className={css.main__topLineRight}>
                        <p>Сначала популярные</p>
                        <button>
                            <img src={Select} alt="" />
                        </button>
                        <button>
                            <img src={Apps} alt="" />
                        </button>
                        <button>
                            <img src={List} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={css.main__middle}>
                <div className={css.main__middleHeader}>
                    <div className={css.main__middleCategoties}>
                        <img src={Apps_red} alt="" />
                        <p>Категории</p>
                        <div className={css.main__middleImg}>
                            <img src={Shevron_up} alt="" />
                        </div>
                    </div>
                    <div>
                        <StandartsList />
                    </div>
                </div>
                <div className={css.main__container}>
                    <div className={css.sidebar}>
                        <div className={css.sidebar__posts}>
                            <div className={css.sidebar__post}>
                                <p>Серия 5.904-1 выпуск 1:</p>
                                <p>Детали крепления воздуховодов <span>95</span></p>
                            </div>
                            <div className={css.sidebar__post}>
                                <p>Серия 4.903-10 Выпуск 4,5,6:</p>
                                <p>Изделия и детали трубопроводов для тепловых сетей <span>15</span></p>
                            </div>
                            <div className={css.sidebar__post}>
                                <p>Серия 4.900-9 Выпуск 1:</p>
                                <p>Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и канализации <span>247</span></p>
                            </div>
                            <div className={css.sidebar__post}>
                                <p>Серия 3.900-9:</p>
                                <p>Опорные конструкции и средства крепления трубопроводов <span>2</span></p>
                            </div>
                            <div className={css.sidebar__post}>
                                <p>Л8-508.000 - Л8-524.000:</p>
                                <p>Опоры и подвески трубопроводов Дн89мм <span>15</span></p>
                            </div>
                            <div className={css.sidebar__post}>
                                <p>Л8-138.000 - Л8-200.000:</p>
                                <p>Опоры и подвески станционных трубопроводов <span>247</span></p>
                            </div>
                            <div className={css.sidebar__postsBottom}>
                                <p>Показать все</p>
                                <img src={Shevron_down} alt="" />
                            </div>
                        </div>
                        <div>
                            <Filters />
                        </div>
                    </div>
                    <div>
                        <Cards />
                    </div>
                </div>
            </div>
            <div className={css.main__bottom}></div>
            <div className={css.main__underline}>
                <p>Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1</p>
                <p>Надежность работы трубопровода в значительной мере зависит от правильности и прочности его крепления. Основные средства крепления трубопроводов — это опора, подвеска, кронштейны, скобы и другие части опорных конструкций.
                    <br></br>
                    Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным существующим нормативным документам, а также изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.
                </p>
                <p>Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и вертикальных участков трубопровода. Основным материалом деталей является сталь 17гс-12, 17г1с-12, 14г2-12, 09г2с-14, 20, 20к и пр.</p>
                <p>Марка стали выбирается исходя от параметров окружающей среды, опоры могут использоваться при температуре от -60°C.
                    Конструкции опор, представленные на сайте, отличаются между собой методом крепления с трубопроводом и несущей способностью.</p>
                <p>Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные швы отвечают требованиям СНиП III-18-75, СНиП II-23-81. Резьбовые части опор обрабатываются антикоррозионной смазкой ПВК по ГОСТ 19537-83 или ее аналогом.</p>
                <p>Скрыть описание</p>
            </div>
        </div>
    )
}

export default Main