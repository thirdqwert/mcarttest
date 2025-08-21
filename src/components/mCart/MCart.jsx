import s from './MCart.module.scss'
import marrigaCart from '../../assets/img/cart.png'
import marrigaCart_ru from '../../assets/img/ru_cart.png'
import { useTranslation } from 'react-i18next'
const MCart = () => {
    const { i18n } = useTranslation()
    return (
        <>
            <div className={s.marriage__cart}>
                {i18n.language == 'en' ? 
                (<img src={marrigaCart} alt="" />) 
                : 
                (<img src={marrigaCart_ru} alt="" />)
                }
            </div>
        </>
    )
}

export default MCart