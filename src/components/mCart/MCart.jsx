import s from './MCart.module.scss'
import marrigaCart from '../../assets/img/cart.png'
import ru_marrigaCart from '../../assets/img/ru_cart.png'
const MCart = () => {
    return (
        <>
            <div className={s.marriage__cart}>
                <img src={ru_marrigaCart} alt="" />
            </div>
        </>
    )
}

export default MCart