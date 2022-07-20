import React from 'react'
import css from './Footer.module.scss'
import PhoneM from '../../assets/icons/Phone_micro.png'
import TelegrammM from '../../assets/icons/Telegramm_micro.png'
import VKM from '../../assets/icons/VK_micro.png'

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.footer__main}>
                <div className={css.footer__mainContainer}>
                    <div className={css.footer__smm}>
                        <button className={css.footer__smmButton}>
                            <img src={PhoneM} alt="" />
                        </button>
                        <button className={css.footer__smmButton}>
                            <img src={TelegrammM} alt="" />
                        </button>
                        <button className={css.footer__smmButton}>
                            <img src={VKM} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={css.footer__above}>
                <div className={css.footer__aboveContainer}>
                    <input className={css.footer__aboveInput} type="text" placeholder='Ваше имя' />
                    <input className={css.footer__aboveInput} type="text" placeholder='Ваш телефон' />
                    <div className={css.footer__aboveButton}>
                        <button className={css.footer__callbackButton}>Заказать звонок</button>
                        <p>Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer